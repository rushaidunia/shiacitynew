// Shared "Player Career Stats" popup for Shia City Basketball.
// Used by previousseasons.html and stats.html so both pages get the
// exact same modal and behavior when a player's name is clicked.
//
// Requires historical-data.js to be loaded first (defines `historicalData`).
// If the page also defines a global `leagueData` (stats.html does), the
// modal will automatically add the current, in-progress season as its
// own row at the top of the career log.

(function () {
    // Inject the modal markup once, so neither page has to keep its own copy in sync.
    const modalHtml = `
    <div id="player-modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden p-2 sm:p-4">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] animate-in fade-in zoom-in duration-200">
            <!-- Modal Header -->
            <div class="p-3 sm:p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/60 shrink-0">
                <div class="flex items-center gap-2.5 sm:gap-3">
                    <div class="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xs sm:text-sm">🏀</div>
                    <div>
                        <h2 id="modal-player-name" class="text-xs sm:text-sm font-extrabold text-zinc-100">Player Name</h2>
                        <p class="text-[10px] sm:text-[11px] text-zinc-400 font-medium">Career Statistics Across Seasons</p>
                    </div>
                </div>
                <button onclick="closePlayerModal()" class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 flex items-center justify-center transition text-xs font-bold">✕</button>
            </div>

            <!-- Modal Body -->
            <div class="p-3 sm:p-5 overflow-y-auto flex-1 min-h-0 flex flex-col gap-4 sm:gap-5">
                <!-- Summary Stats Pills -->
                <div id="modal-summary-pills" class="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                    <!-- Injected dynamically -->
                </div>

                <!-- Season Breakdown Table -->
                <div class="border border-zinc-800/80 rounded-xl overflow-hidden bg-zinc-950/40">
                    <div class="p-2.5 sm:p-3 border-b border-zinc-800/80 bg-zinc-900/40">
                        <h3 class="text-[11px] sm:text-xs font-bold text-zinc-300 uppercase tracking-wider">Season-by-Season Logs</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr class="bg-zinc-950/60 text-zinc-500 border-b border-zinc-800 text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                                    <th class="p-2.5 sm:p-3">Season</th>
                                    <th class="p-2.5 sm:p-3">Team</th>
                                    <th class="p-2.5 sm:p-3 text-center">GP</th>
                                    <th class="p-2.5 sm:p-3 text-center">PPG</th>
                                    <th class="p-2.5 sm:p-3 text-center">REB</th>
                                    <th class="p-2.5 sm:p-3 text-center">STL</th>
                                    <th class="p-2.5 sm:p-3 text-center">BLK</th>
                                    <th class="p-2.5 sm:p-3 text-center pr-3 sm:pr-4">3PM</th>
                                </tr>
                            </thead>
                            <tbody id="modal-table-body" class="divide-y divide-zinc-800/40 font-mono text-zinc-300">
                                <!-- Injected dynamically -->
                            </tbody>
                        </table>
                    </div>
                    <!-- Mobile Horizontal Scroll Hint -->
                    <div class="py-2 px-3 bg-zinc-950/80 text-center text-[10px] text-zinc-400 border-t border-zinc-800/40 sm:hidden flex items-center justify-center gap-1.5 font-sans">
                        <span class="text-orange-400 font-bold">←</span> Scroll horizontally to see more stats <span class="text-orange-400 font-bold">→</span>
                    </div>
                </div>
            </div>

            <!-- Modal Footer -->
            <div class="p-2.5 sm:p-3 border-t border-zinc-800 bg-zinc-950/60 flex justify-end shrink-0">
                <button onclick="closePlayerModal()" class="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition">Close</button>
            </div>
        </div>
    </div>`;

    document.addEventListener('DOMContentLoaded', function () {
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        document.getElementById('player-modal').addEventListener('click', function (e) {
            if (e.target === this) {
                closePlayerModal();
            }
        });
    });

    // Tries to label the live/current season using the page's own <h1 id="page-title">
    // (e.g. "Season 4 Statistics & Standings" -> "Season 4"). Falls back to "Current Season".
    function getCurrentSeasonLabel() {
        const titleEl = document.getElementById('page-title');
        if (titleEl) {
            const match = titleEl.innerText.match(/Season\s+\d+/i);
            if (match) return match[0];
        }
        return 'Current Season';
    }

    // Pulls the current, in-progress season's line for this player from the page's
    // own `leagueData` global, if present (only stats.html defines this).
    function getCurrentSeasonLog(playerName) {
        if (typeof leagueData === 'undefined' || !Array.isArray(leagueData)) return null;

        for (const team of leagueData) {
            for (const p of team.players) {
                const cleanPName = p.name.replace(' Captain', '');
                if (cleanPName.toLowerCase() === playerName.toLowerCase()) {
                    return {
                        season: getCurrentSeasonLabel(),
                        team: team.teamName,
                        gp: p.gp,
                        ppg: p.ppg,
                        reb: p.reb,
                        stl: p.stl,
                        blk: p.blk,
                        tpm: p.tpm
                    };
                }
            }
        }
        return null;
    }

    window.openPlayerModal = function (playerName) {
        document.getElementById('modal-player-name').innerText = playerName;
        const modalTableBody = document.getElementById('modal-table-body');
        const summaryPills = document.getElementById('modal-summary-pills');
        modalTableBody.innerHTML = '';
        summaryPills.innerHTML = '';

        let seasonLogs = [];
        let totalPpg = 0, totalReb = 0, totalStl = 0, totalBlk = 0, totalTpm = 0;
        let seasonsCount = 0;

        // Current, in-progress season (stats.html only) goes on top.
        const currentLog = getCurrentSeasonLog(playerName);
        if (currentLog) {
            seasonLogs.push(currentLog);
            if (typeof currentLog.ppg === 'number') {
                totalPpg += currentLog.ppg;
                totalReb += currentLog.reb;
                totalStl += currentLog.stl;
                totalBlk += currentLog.blk;
                totalTpm += currentLog.tpm;
                seasonsCount++;
            }
        }

        // Archived seasons from historical-data.js.
        ['s3', 's2', 's1'].forEach(sKey => {
            const seasonData = historicalData[sKey];
            seasonData.teams.forEach(team => {
                team.players.forEach(p => {
                    let cleanPName = p.name.replace(' Captain', '');
                    if (cleanPName.toLowerCase() === playerName.toLowerCase()) {
                        seasonLogs.push({
                            season: seasonData.title,
                            team: team.teamName,
                            gp: p.gp,
                            ppg: p.ppg,
                            reb: p.reb,
                            stl: p.stl,
                            blk: p.blk,
                            tpm: p.tpm
                        });

                        if (typeof p.ppg === 'number') {
                            totalPpg += p.ppg;
                            totalReb += p.reb;
                            totalStl += p.stl;
                            totalBlk += p.blk;
                            totalTpm += p.tpm;
                            seasonsCount++;
                        }
                    }
                });
            });
        });

        if (seasonLogs.length === 0) {
            modalTableBody.innerHTML = `<tr><td colspan="8" class="p-4 text-center text-zinc-500">No previous season records found for this player.</td></tr>`;
        } else {
            seasonLogs.forEach(log => {
                let row = document.createElement('tr');
                row.className = "hover:bg-zinc-800/30 transition-colors";
                row.innerHTML = `
                    <td class="p-2.5 sm:p-3 font-semibold text-zinc-200">${log.season}</td>
                    <td class="p-2.5 sm:p-3 text-zinc-400">${log.team}</td>
                    <td class="p-2.5 sm:p-3 text-center">${log.gp}</td>
                    <td class="p-2.5 sm:p-3 text-center font-bold text-orange-400">${typeof log.ppg === 'number' ? Number(log.ppg).toFixed(1) : '-'}</td>
                    <td class="p-2.5 sm:p-3 text-center">${typeof log.reb === 'number' ? Number(log.reb).toFixed(1) : '-'}</td>
                    <td class="p-2.5 sm:p-3 text-center">${typeof log.stl === 'number' ? Number(log.stl).toFixed(1) : '-'}</td>
                    <td class="p-2.5 sm:p-3 text-center">${typeof log.blk === 'number' ? Number(log.blk).toFixed(1) : '-'}</td>
                    <td class="p-2.5 sm:p-3 text-center pr-3 sm:pr-4">${typeof log.tpm === 'number' ? Number(log.tpm).toFixed(1) : '-'}</td>
                `;
                modalTableBody.appendChild(row);
            });
        }

        const avgPpg = seasonsCount > 0 ? (totalPpg / seasonsCount).toFixed(1) : '0.0';
        const avgReb = seasonsCount > 0 ? (totalReb / seasonsCount).toFixed(1) : '0.0';
        const avgStl = seasonsCount > 0 ? (totalStl / seasonsCount).toFixed(1) : '0.0';
        const avgBlk = seasonsCount > 0 ? (totalBlk / seasonsCount).toFixed(1) : '0.0';
        const avgTpm = seasonsCount > 0 ? (totalTpm / seasonsCount).toFixed(1) : '0.0';

        summaryPills.innerHTML = `
            <div class="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                <span class="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Career PPG</span>
                <span class="text-sm sm:text-base font-extrabold text-orange-400 font-mono mt-0.5">${avgPpg}</span>
            </div>
            <div class="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                <span class="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Career REB</span>
                <span class="text-sm sm:text-base font-extrabold text-zinc-200 font-mono mt-0.5">${avgReb}</span>
            </div>
            <div class="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                <span class="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Career STL</span>
                <span class="text-sm sm:text-base font-extrabold text-zinc-200 font-mono mt-0.5">${avgStl}</span>
            </div>
            <div class="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                <span class="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Career BLK</span>
                <span class="text-sm sm:text-base font-extrabold text-zinc-200 font-mono mt-0.5">${avgBlk}</span>
            </div>
            <div class="bg-zinc-950/60 border border-zinc-800/80 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center">
                <span class="text-[9px] sm:text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Career 3PM</span>
                <span class="text-sm sm:text-base font-extrabold text-zinc-200 font-mono mt-0.5">${avgTpm}</span>
            </div>
        `;

        document.getElementById('player-modal').classList.remove('hidden');
    };

    window.closePlayerModal = function () {
        document.getElementById('player-modal').classList.add('hidden');
    };
})();