// Shared historical season data for Shia City Basketball
// Used by previousseasons.html (season archive) and stats.html (player career popup)
        const historicalData = {
            s3: {
                title: "Season 3",
                champion: "Kadhimiya",
                runnerUp: "Samarra",
                standings: [
                    { rank: 1, team: "Samarra", record: "6-1", diff: 58, pts: 471 },
                    { rank: 2, team: "Qom", record: "5-2", diff: 86, pts: 438 },
                    { rank: 3, team: "Najaf", record: "5-2", diff: 82, pts: 431 },
                    { rank: 4, team: "Medina", record: "5-2", diff: 37, pts: 465 },
                    { rank: 5, team: "Mashhad", record: "3-4", diff: -23, pts: 405 },
                    { rank: 6, team: "Kadhimiya", record: "2-5", diff: -16, pts: 381 },
                    { rank: 7, team: "Karbala", record: "1-6", diff: -99, pts: 374 },
                    { rank: 8, team: "Mecca", record: "1-6", diff: -125, pts: 323 }
                ],
                leaders: {
                    ppg: [
                        { rank: 1, name: "Zulfiqar Rizvi", team: "Karbala", val: 31.1 },
                        { rank: 2, name: "Hadi Naqvi", team: "Qom", val: 27.0 },
                        { rank: 3, name: "Ammad Mehdi", team: "Medina", val: 25.6 },
                        { rank: 4, name: "Mohsin Jaffery", team: "Samarra", val: 25.3 },
                        { rank: 5, name: "Ayaz Haider", team: "Kadhimiya", val: 24.3 },
                        { rank: 6, name: "Abbas Aslam", team: "Medina", val: 22.9 },
                        { rank: 7, name: "Ali Ladak", team: "Najaf", val: 21.4 },
                        { rank: 8, name: "Ali Abbas Naqvi", team: "Mashhad", val: 20.6 },
                        { rank: 9, name: "Hashim Shah", team: "Mecca", val: 18.3 },
                        { rank: 10, name: "Taqi Hussain", team: "Qom", val: 18.3 }
                    ],
                    reb: [
                        { rank: 1, name: "Ayaz Haider", team: "Kadhimiya", val: 19.0 },
                        { rank: 2, name: "Rehan Azam", team: "Medina", val: 18.4 },
                        { rank: 3, name: "Adil Abidi", team: "Mashhad", val: 17.0 },
                        { rank: 4, name: "Mohsin Jaffery", team: "Samarra", val: 15.4 },
                        { rank: 5, name: "Mohammad Zaidi", team: "Mecca", val: 12.4 },
                        { rank: 6, name: "Muhammad Munir", team: "Kadhimiya", val: 12.4 },
                        { rank: 7, name: "Ali Ladak", team: "Najaf", val: 12.4 },
                        { rank: 8, name: "Syed Daniyal", team: "Mecca", val: 11.8 },
                        { rank: 9, name: "Ali Abidi", team: "Samarra", val: 11.7 },
                        { rank: 10, name: "Mohammad Naqvi", team: "Mashhad", val: 11.0 }
                    ],
                    stlblk: [
                        { rank: 1, name: "Hussan Ali", team: "Mashhad", val: 4.6 },
                        { rank: 2, name: "Ayaz Haider", team: "Kadhimiya", val: 3.7 },
                        { rank: 3, name: "Mohsin Jaffery", team: "Samarra", val: 3.3 },
                        { rank: 4, name: "Hadi Naqvi", team: "Qom", val: 2.5 },
                        { rank: 5, name: "Hasan Ahmad", team: "Medina", val: 2.4 },
                        { rank: 6, name: "Imran Ladak", team: "Najaf", val: 2.4 },
                        { rank: 7, name: "Rehan Azam", team: "Medina", val: 2.3 },
                        { rank: 8, name: "Syed Daniyal", team: "Mecca", val: 2.3 },
                        { rank: 9, name: "Ali Zaidi", team: "Kadhimiya", val: 2.2 },
                        { rank: 10, name: "Mohammad Zaidi", team: "Mecca", val: 1.8 }
                    ],
                    tpm: [
                        { rank: 1, name: "Hadi Naqvi", team: "Qom", val: 5.8 },
                        { rank: 2, name: "Zulfiqar Rizvi", team: "Karbala", val: 4.7 },
                        { rank: 3, name: "Ammad Mehdi", team: "Medina", val: 4.6 },
                        { rank: 4, name: "Abbas Aslam", team: "Medina", val: 4.4 },
                        { rank: 5, name: "Ali Abbas Naqvi", team: "Mashhad", val: 4.1 },
                        { rank: 6, name: "Tamseel Raza", team: "Karbala", val: 4.0 },
                        { rank: 7, name: "Zain Jafri", team: "Samarra", val: 3.8 },
                        { rank: 8, name: "Mo Naqvi", team: "Qom", val: 3.7 },
                        { rank: 9, name: "Taqi Hussain", team: "Qom", val: 3.7 },
                        { rank: 10, name: "AJ Hussain", team: "Kadhimiya", val: 3.3 }
                    ]
                },
                teams: [
                    {
                        teamName: "Karbala",
                        players: [
                            { name: "Zulfiqar Rizvi Captain", gp: 7, ppg: 31.1, reb: 6.0, stl: 1.1, blk: 0.3, tpm: 4.7 },
                            { name: "Syed Noeshare", gp: 4, ppg: 4.8, reb: 6.0, stl: 1.0, blk: 0.8, tpm: 0.8 },
                            { name: "Tamseel Raza", gp: 5, ppg: 13.2, reb: 4.6, stl: 0.4, blk: 0.2, tpm: 4.0 },
                            { name: "Imran Zaidi", gp: 7, ppg: 10.7, reb: 11.1, stl: 0.7, blk: 0.9, tpm: 0.0 },
                            { name: "Ameer Abidi", gp: 6, ppg: 2.7, reb: 9.0, stl: 0.5, blk: 0.5, tpm: 0.0 },
                            { name: "Khushnood Rizvi", gp: 6, ppg: 0.0, reb: 0.7, stl: 0.0, blk: 0.0, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Qom",
                        players: [
                            { name: "Hadi Naqvi Captain", gp: 6, ppg: 27.0, reb: 10.5, stl: 2.0, blk: 0.5, tpm: 5.8 },
                            { name: "Hasnain Zaidi", gp: 7, ppg: 8.7, reb: 13.9, stl: 0.6, blk: 1.1, tpm: 0.6 },
                            { name: "Mo Naqvi", gp: 6, ppg: 11.8, reb: 5.3, stl: 1.2, blk: 0.2, tpm: 3.7 },
                            { name: "Taqi Hussain", gp: 7, ppg: 18.3, reb: 3.3, stl: 0.9, blk: 0.0, tpm: 3.7 },
                            { name: "Azeem Haider", gp: 4, ppg: 2.0, reb: 6.0, stl: 0.0, blk: 0.0, tpm: 0.0 },
                            { name: "Shan Ali", gp: 6, ppg: 1.8, reb: 3.8, stl: 0.2, blk: 0.0, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Samarra",
                        players: [
                            { name: "Mohsin Jaffery Captain", gp: 7, ppg: 25.3, reb: 15.4, stl: 2.3, blk: 1.0, tpm: 2.7 },
                            { name: "Ali Abidi", gp: 6, ppg: 8.8, reb: 11.7, stl: 0.8, blk: 0.3, tpm: 0.5 },
                            { name: "Hussain Khan", gp: 6, ppg: 12.8, reb: 9.2, stl: 1.2, blk: 0.5, tpm: 1.5 },
                            { name: "Zain Jafri", gp: 6, ppg: 16.8, reb: 4.2, stl: 0.0, blk: 0.0, tpm: 3.8 },
                            { name: "Abbas Khan", gp: 5, ppg: 0.0, reb: 1.6, stl: 0.2, blk: 0.2, tpm: 0.0 },
                            { name: "Zain Ali", gp: 7, ppg: 9.0, reb: 3.0, stl: 1.0, blk: 0.0, tpm: 2.0 }
                        ]
                    },
                    {
                        teamName: "Medina",
                        players: [
                            { name: "Abbas Aslam Captain", gp: 7, ppg: 22.9, reb: 5.3, stl: 1.1, blk: 0.6, tpm: 4.4 },
                            { name: "Ammad Mehdi", gp: 7, ppg: 25.6, reb: 7.6, stl: 0.7, blk: 0.0, tpm: 4.6 },
                            { name: "Hasan Ahmad", gp: 5, ppg: 6.2, reb: 6.8, stl: 2.2, blk: 0.2, tpm: 1.4 },
                            { name: "Rehan Azam", gp: 7, ppg: 5.6, reb: 18.4, stl: 0.9, blk: 1.4, tpm: 0.1 },
                            { name: "Sheharyar Jafri", gp: 6, ppg: 4.5, reb: 2.0, stl: 0.2, blk: 0.2, tpm: 0.2 },
                            { name: "Turab Hussain", gp: 6, ppg: 5.0, reb: 3.5, stl: 0.3, blk: 0.5, tpm: 0.5 }
                        ]
                    },
                    {
                        teamName: "Najaf",
                        players: [
                            { name: "Imran Ladak Captain", gp: 6, ppg: 14.3, reb: 3.7, stl: 2.2, blk: 0.2, tpm: 0.8 },
                            { name: "Ali Ladak", gp: 7, ppg: 21.4, reb: 12.4, stl: 1.4, blk: 0.3, tpm: 2.0 },
                            { name: "Umar Sheroz", gp: 7, ppg: 11.9, reb: 6.1, stl: 1.1, blk: 0.1, tpm: 1.0 },
                            { name: "Qasim Sheroz", gp: 7, ppg: 6.1, reb: 9.1, stl: 0.3, blk: 0.6, tpm: 0.3 },
                            { name: "Danyal Zaidi", gp: 7, ppg: 8.0, reb: 3.1, stl: 0.4, blk: 0.1, tpm: 2.0 },
                            { name: "Shayan Jafri", gp: 7, ppg: 1.4, reb: 1.6, stl: 0.0, blk: 0.1, tpm: 0.3 }
                        ]
                    },
                    {
                        teamName: "Mashhad",
                        players: [
                            { name: "Adil Abidi Captain", gp: 6, ppg: 17.3, reb: 17.0, stl: 1.3, blk: 0.0, tpm: 0.2 },
                            { name: "Ali Abbas Naqvi", gp: 7, ppg: 20.6, reb: 7.9, stl: 1.1, blk: 0.4, tpm: 4.1 },
                            { name: "Hussan Ali", gp: 5, ppg: 11.2, reb: 8.2, stl: 1.0, blk: 1.6, tpm: 3.0 },
                            { name: "Shaneali Hirji", gp: 5, ppg: 4.2, reb: 4.2, stl: 0.4, blk: 0.0, tpm: 0.0 },
                            { name: "Mohammad Naqvi", gp: 6, ppg: 5.7, reb: 11.0, stl: 0.8, blk: 0.0, tpm: 0.2 },
                            { name: "Abbas Rizvi", gp: 6, ppg: 6.3, reb: 5.5, stl: 0.2, blk: 0.0, tpm: 1.5 }
                        ]
                    },
                    {
                        teamName: "Kadhimiya",
                        players: [
                            { name: "Ayaz Haider Captain", gp: 7, ppg: 24.3, reb: 19.0, stl: 2.0, blk: 1.7, tpm: 2.3 },
                            { name: "Ali Zaidi", gp: 6, ppg: 12.3, reb: 7.3, stl: 1.7, blk: 0.5, tpm: 0.0 },
                            { name: "AJ Hussain", gp: 6, ppg: 11.0, reb: 7.0, stl: 0.2, blk: 0.3, tpm: 3.3 },
                            { name: "Mohammad Shigri", gp: 4, ppg: 3.0, reb: 4.3, stl: 1.0, blk: 0.3, tpm: 0.5 },
                            { name: "Saif Hussain", gp: 2, ppg: 4.5, reb: 3.5, stl: 0.5, blk: 0.0, tpm: 0.0 },
                            { name: "Muhammad Munir", gp: 5, ppg: 0.8, reb: 12.4, stl: 0.0, blk: 0.2, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Mecca",
                        players: [
                            { name: "Hashim Shah Captain", gp: 7, ppg: 18.3, reb: 6.7, stl: 0.4, blk: 0.3, tpm: 2.6 },
                            { name: "Syed Daniyal", gp: 6, ppg: 11.7, reb: 11.8, stl: 1.5, blk: 0.8, tpm: 0.8 },
                            { name: "Danesh Jafri", gp: 6, ppg: 12.3, reb: 3.5, stl: 1.3, blk: 0.0, tpm: 3.2 },
                            { name: "Mohammad Zaidi", gp: 7, ppg: 4.9, reb: 12.4, stl: 1.4, blk: 0.4, tpm: 1.0 },
                            { name: "Mohammed Rizvi", gp: 2, ppg: 3.0, reb: 3.5, stl: 0.0, blk: 0.0, tpm: 0.0 },
                            { name: "Kumail Jafri", gp: 7, ppg: 1.6, reb: 1.4, stl: 0.0, blk: 0.0, tpm: 0.3 }
                        ]
                    }
                ]
            },
            s2: {
                title: "Season 2",
                champion: "Bucks",
                runnerUp: "Nuggets",
                standings: [
                    { rank: 1, team: "Bucks", record: "6-1", diff: 160, pts: 525 },
                    { rank: 2, team: "Rockets", record: "6-1", diff: 113, pts: 431 },
                    { rank: 3, team: "Nuggets", record: "5-2", diff: 76, pts: 499 },
                    { rank: 4, team: "Kings", record: "5-2", diff: 7, pts: 382 },
                    { rank: 5, team: "Jazz", record: "3-4", diff: -107, pts: 382 },
                    { rank: 6, team: "Nets", record: "2-5", diff: -79, pts: 370 },
                    { rank: 7, team: "Pistons", record: "1-6", diff: -35, pts: 395 },
                    { rank: 8, team: "Heat", record: "0-7", diff: -135, pts: 389 }
                ],
                leaders: {
                    ppg: [
                        { rank: 1, name: "Abbas Aslam", team: "Bucks", val: 34.1 },
                        { rank: 2, name: "Zulfiqar Rizvi", team: "Kings", val: 32.1 },
                        { rank: 3, name: "Hashim Shah", team: "Nets", val: 25.7 },
                        { rank: 4, name: "Mohsin Jaffery", team: "Nuggets", val: 25.3 },
                        { rank: 5, name: "Ammad Mehdi", team: "Jazz", val: 23.8 },
                        { rank: 6, name: "Ali Abbas Naqvi", team: "Nuggets", val: 23.4 },
                        { rank: 7, name: "Haider Zaidi", team: "Bucks", val: 23.4 },
                        { rank: 8, name: "Murtaza Hussain", team: "Rockets", val: 18.0 },
                        { rank: 9, name: "Haider Tariq", team: "Nets", val: 17.7 },
                        { rank: 10, name: "Jaffar Raza", team: "Heat", val: 16.1 }
                    ],
                    reb: [
                        { rank: 1, name: "Mohsin Jaffery", team: "Nuggets", val: 15.3 },
                        { rank: 2, name: "Imran Zaidi", team: "Pistons", val: 15.0 },
                        { rank: 3, name: "Adil Abidi", team: "Rockets", val: 14.7 },
                        { rank: 4, name: "Jaffar Raza", team: "Heat", val: 13.9 },
                        { rank: 5, name: "Qasim Sheroz", team: "Nets", val: 13.2 },
                        { rank: 6, name: "Ali Abidi", team: "Jazz", val: 12.9 },
                        { rank: 7, name: "Hasnain Zaidi", team: "Bucks", val: 12.6 },
                        { rank: 8, name: "Murtaza Hussain", team: "Rockets", val: 12.1 },
                        { rank: 9, name: "Kumail Rizvi", team: "Kings", val: 10.5 },
                        { rank: 10, name: "Haider Tariq", team: "Nets", val: 10.3 }
                    ],
                    stlblk: [
                        { rank: 1, name: "Syed Noeshare", team: "Kings", val: 4.0 },
                        { rank: 2, name: "Haider Zaidi", team: "Bucks", val: 2.6 },
                        { rank: 3, name: "Mohsin Jaffery", team: "Nuggets", val: 2.8 },
                        { rank: 4, name: "Saif Hussain", team: "Nets", val: 2.6 },
                        { rank: 5, name: "Abbas Aslam", team: "Bucks", val: 2.1 },
                        { rank: 6, name: "Ali Zaidi", team: "Pistons", val: 2.3 },
                        { rank: 7, name: "Hussain Khan", team: "Jazz", val: 2.5 },
                        { rank: 8, name: "Ali Abbas Naqvi", team: "Nuggets", val: 2.0 },
                        { rank: 9, name: "Zargham Syed", team: "Heat", val: 1.5 },
                        { rank: 10, name: "Hasan Ahmad", team: "Nuggets", val: 2.3 }
                    ],
                    tpm: [
                        { rank: 1, name: "Abbas Aslam", team: "Bucks", val: 6.4 },
                        { rank: 2, name: "Zulfiqar Rizvi", team: "Kings", val: 5.3 },
                        { rank: 3, name: "Ali Abbas Naqvi", team: "Nuggets", val: 4.7 },
                        { rank: 4, name: "Hashim Shah", team: "Nets", val: 4.3 },
                        { rank: 5, name: "Mo Naqvi", team: "Rockets", val: 3.8 },
                        { rank: 6, name: "Ammad Mehdi", team: "Jazz", val: 3.8 },
                        { rank: 7, name: "Tamseel Raza", team: "Heat", val: 3.4 },
                        { rank: 8, name: "Hussan Ali", team: "Rockets", val: 3.3 },
                        { rank: 9, name: "Taqi Hussain", team: "Jazz", val: 3.2 },
                        { rank: 10, name: "Haider Tariq", team: "Nets", val: 3.0 }
                    ]
                },
                teams: [
                    {
                        teamName: "Nuggets",
                        players: [
                            { name: "Mohsin Jaffery Captain", gp: 7, ppg: 25.3, reb: 15.3, stl: 0.9, blk: 1.9, tpm: 1.7 },
                            { name: "Ali Abbas Naqvi", gp: 7, ppg: 23.4, reb: 9.3, stl: 1.7, blk: 0.3, tpm: 4.7 },
                            { name: "Zain Jafri", gp: 6, ppg: 12.2, reb: 7.5, stl: 0.2, blk: 0.2, tpm: 2.0 },
                            { name: "Hasan Ahmad", gp: 7, ppg: 8.9, reb: 5.7, stl: 1.4, blk: 0.9, tpm: 1.6 },
                            { name: "Sheharyar Jafri", gp: 5, ppg: 3.0, reb: 1.8, stl: 0.4, blk: 0.0, tpm: 0.4 },
                            { name: "Shayan Jafri", gp: 5, ppg: 1.6, reb: 2.8, stl: 0.6, blk: 0.2, tpm: 0.4 }
                        ]
                    },
                    {
                        teamName: "Nets",
                        players: [
                            { name: "Hashim Shah Captain", gp: 6, ppg: 25.7, reb: 10.2, stl: 0.5, blk: 0.5, tpm: 4.3 },
                            { name: "Haider Tariq", gp: 6, ppg: 17.7, reb: 10.3, stl: 0.8, blk: 1.0, tpm: 3.0 },
                            { name: "Qasim Sheroz", gp: 5, ppg: 5.4, reb: 13.2, stl: 0.8, blk: 0.4, tpm: 0.8 },
                            { name: "Mohammad Shigri", gp: 6, ppg: 6.3, reb: 2.8, stl: 1.3, blk: 0.3, tpm: 1.5 },
                            { name: "Saif Hussain", gp: 7, ppg: 3.1, reb: 5.9, stl: 2.0, blk: 0.6, tpm: 0.0 },
                            { name: "Ameer Abidi", gp: 7, ppg: 3.3, reb: 4.1, stl: 0.1, blk: 0.3, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Heat",
                        players: [
                            { name: "Tamseel Raza Captain", gp: 7, ppg: 15.0, reb: 9.4, stl: 0.7, blk: 0.3, tpm: 3.4 },
                            { name: "Zargham Syed", gp: 4, ppg: 13.8, reb: 6.0, stl: 1.5, blk: 0.0, tpm: 1.8 },
                            { name: "Jaffar Raza", gp: 7, ppg: 16.1, reb: 13.9, stl: 0.9, blk: 0.6, tpm: 2.7 },
                            { name: "Zulfiqar Hussain", gp: 6, ppg: 12.7, reb: 9.8, stl: 1.0, blk: 0.3, tpm: 1.2 },
                            { name: "Kumail Jafri", gp: 5, ppg: 6.4, reb: 3.4, stl: 0.0, blk: 0.2, tpm: 2.0 },
                            { name: "Imroze Jafri", gp: 5, ppg: 1.0, reb: 3.6, stl: 0.0, blk: 0.2, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Pistons",
                        players: [
                            { name: "Imran Zaidi Captain", gp: 5, ppg: 10.6, reb: 15.0, stl: 0.8, blk: 0.8, tpm: 0.2 },
                            { name: "Ali Zaidi", gp: 7, ppg: 15.3, reb: 10.3, stl: 2.0, blk: 0.3, tpm: 1.0 },
                            { name: "Umar Sheroz", gp: 5, ppg: 12.2, reb: 4.2, stl: 0.2, blk: 0.6, tpm: 2.6 },
                            { name: "Asim Abidi", gp: 6, ppg: 9.2, reb: 5.5, stl: 0.7, blk: 0.2, tpm: 1.5 },
                            { name: "Danyal Zaidi", gp: 7, ppg: 12.7, reb: 7.3, stl: 1.1, blk: 0.0, tpm: 2.4 },
                            { name: "Abbas Rizvi", gp: 4, ppg: 5.0, reb: 5.5, stl: 0.8, blk: 0.3, tpm: 1.5 }
                        ]
                    },
                    {
                        teamName: "Rockets",
                        players: [
                            { name: "Adil Abidi Captain", gp: 6, ppg: 12.5, reb: 14.7, stl: 0.8, blk: 0.3, tpm: 1.2 },
                            { name: "Mo Naqvi", gp: 6, ppg: 12.2, reb: 5.7, stl: 1.3, blk: 0.0, tpm: 3.8 },
                            { name: "Murtaza Hussain", gp: 7, ppg: 18.0, reb: 12.1, stl: 0.4, blk: 0.4, tpm: 2.3 },
                            { name: "Hussan Ali", gp: 7, ppg: 12.9, reb: 8.6, stl: 1.0, blk: 1.0, tpm: 3.3 },
                            { name: "Jawad Naqvi", gp: 7, ppg: 6.9, reb: 4.9, stl: 0.4, blk: 0.1, tpm: 2.0 },
                            { name: "Shan Ali", gp: 6, ppg: 3.2, reb: 4.5, stl: 1.5, blk: 0.0, tpm: 0.7 }
                        ]
                    },
                    {
                        teamName: "Kings",
                        players: [
                            { name: "Zulfiqar Rizvi Captain", gp: 7, ppg: 32.1, reb: 8.7, stl: 0.7, blk: 0.1, tpm: 5.3 },
                            { name: "Syed Noeshare", gp: 7, ppg: 10.0, reb: 9.1, stl: 2.9, blk: 1.1, tpm: 0.1 },
                            { name: "Kumail Rizvi", gp: 6, ppg: 6.8, reb: 10.5, stl: 0.3, blk: 0.3, tpm: 0.0 },
                            { name: "Asoo Rizvi", gp: 7, ppg: 4.0, reb: 8.6, stl: 0.7, blk: 0.0, tpm: 0.6 },
                            { name: "Zeeshan Hussain", gp: 7, ppg: 1.1, reb: 2.4, stl: 1.0, blk: 0.0, tpm: 0.0 },
                            { name: "Ilhan Zaidi", gp: 6, ppg: 0.0, reb: 2.5, stl: 0.2, blk: 0.2, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Jazz",
                        players: [
                            { name: "Taqi Hussain Captain", gp: 6, ppg: 12.5, reb: 3.8, stl: 0.7, blk: 0.0, tpm: 3.2 },
                            { name: "Ammad Mehdi", gp: 4, ppg: 23.8, reb: 7.8, stl: 0.5, blk: 0.0, tpm: 3.8 },
                            { name: "Ali Abidi", gp: 7, ppg: 11.1, reb: 12.9, stl: 1.3, blk: 0.7, tpm: 0.6 },
                            { name: "Hussain Khan", gp: 7, ppg: 13.9, reb: 9.0, stl: 1.9, blk: 0.6, tpm: 2.1 },
                            { name: "Zain Hussain", gp: 7, ppg: 5.6, reb: 7.4, stl: 0.6, blk: 0.3, tpm: 0.9 },
                            { name: "Murtaza Kazmi", gp: 6, ppg: 1.3, reb: 0.5, stl: 0.0, blk: 0.0, tpm: 0.3 }
                        ]
                    },
                    {
                        teamName: "Bucks",
                        players: [
                            { name: "Haider Zaidi Captain", gp: 7, ppg: 23.4, reb: 8.1, stl: 2.3, blk: 0.3, tpm: 2.6 },
                            { name: "Abbas Aslam", gp: 7, ppg: 34.1, reb: 6.7, stl: 2.0, blk: 0.1, tpm: 6.4 },
                            { name: "Hasnain Zaidi", gp: 7, ppg: 7.6, reb: 12.6, stl: 1.0, blk: 1.1, tpm: 0.3 },
                            { name: "Muiz Hashmi", gp: 6, ppg: 4.2, reb: 10.0, stl: 0.5, blk: 0.0, tpm: 0.0 },
                            { name: "Mohammad Zaidi", gp: 7, ppg: 3.7, reb: 6.3, stl: 0.6, blk: 0.1, tpm: 0.3 },
                            { name: "Turab Hussain", gp: 7, ppg: 3.0, reb: 1.7, stl: 0.1, blk: 0.0, tpm: 0.1 }
                        ]
                    }
                ]
            },
            s1: {
                title: "Season 1",
                champion: "Raptors",
                runnerUp: "Hawks",
                standings: [
                    { rank: 1, team: "Hawks", record: "6-0", diff: 106, pts: 417 },
                    { rank: 2, team: "Raptors", record: "4-2", diff: 120, pts: 386 },
                    { rank: 3, team: "Bulls", record: "4-2", diff: -7, pts: 356 },
                    { rank: 4, team: "Lakers", record: "3-3", diff: 2, pts: 307 },
                    { rank: 5, team: "Grizzlies", record: "3-3", diff: 1, pts: 321 },
                    { rank: 6, team: "Knicks", record: "1-5", diff: -90, pts: 260 },
                    { rank: 7, team: "Magic", record: "0-6", diff: -133, pts: 282 }
                ],
                leaders: {
                    ppg: [
                        { rank: 1, name: "Zulfiqar Rizvi", team: "Magic", val: 39.4 },
                        { rank: 2, name: "Ali Abbas Naqvi", team: "Grizzlies", val: 20.3 },
                        { rank: 3, name: "Hashim Shah", team: "Hawks", val: 18.5 },
                        { rank: 4, name: "Hamza Rizvi", team: "Hawks", val: 18.3 },
                        { rank: 5, name: "Mohsin Jaffery", team: "Hawks", val: 17.3 },
                        { rank: 6, name: "Hamza Syed", team: "Knicks", val: 17.2 },
                        { rank: 7, name: "Imran Zaidi", team: "Lakers", val: 15.8 },
                        { rank: 8, name: "Murtaza Hussain", team: "Bulls", val: 15.4 },
                        { rank: 9, name: "Taqi Hussain", team: "Bulls", val: 15.2 },
                        { rank: 10, name: "Hasnain Zaidi", team: "Lakers", val: 13.2 }
                    ],
                    reb: [
                        { rank: 1, name: "Adil Abidi", team: "Raptors", val: 17.2 },
                        { rank: 2, name: "Qasim Sheroz", team: "Grizzlies", val: 11.2 },
                        { rank: 3, name: "Zulfiqar Rizvi", team: "Magic", val: 10.8 },
                        { rank: 4, name: "Ali Abidi", team: "Bulls", val: 10.4 },
                        { rank: 5, name: "Rehan Azam", team: "Magic", val: 10.3 },
                        { rank: 6, name: "Mohsin Jaffery", team: "Hawks", val: 10.2 },
                        { rank: 7, name: "Imran Zaidi", team: "Lakers", val: 9.0 },
                        { rank: 8, name: "Syed Daniyal", team: "Hawks", val: 9.0 },
                        { rank: 9, name: "Hamza Syed", team: "Knicks", val: 8.6 },
                        { rank: 10, name: "Asim Abidi", team: "Bulls", val: 8.3 }
                    ],
                    stlblk: [
                        { rank: 1, name: "Qasim Sheroz", team: "Grizzlies", val: 5.0 },
                        { rank: 2, name: "Hasnain Zaidi", team: "Lakers", val: 4.0 },
                        { rank: 3, name: "Abbas Mazhar", team: "Raptors", val: 4.0 },
                        { rank: 4, name: "Jawad Naqvi", team: "Magic", val: 3.8 },
                        { rank: 5, name: "Mohsin Jaffery", team: "Hawks", val: 3.7 },
                        { rank: 6, name: "Adil Abidi", team: "Raptors", val: 3.7 },
                        { rank: 7, name: "Ali Abidi", team: "Bulls", val: 3.5 },
                        { rank: 8, name: "Murtaza Hussain", team: "Bulls", val: 3.5 },
                        { rank: 9, name: "Imran Zaidi", team: "Lakers", val: 3.5 },
                        { rank: 10, name: "Asim Abidi", team: "Bulls", val: 3.0 }
                    ],
                    tpm: [
                        { rank: 1, name: "Zulfiqar Rizvi", team: "Magic", val: 6.0 },
                        { rank: 2, name: "Hamza Rizvi", team: "Hawks", val: 4.3 },
                        { rank: 3, name: "Ali Abbas Naqvi", team: "Grizzlies", val: 3.7 },
                        { rank: 4, name: "Taqi Hussain", team: "Bulls", val: 3.6 },
                        { rank: 5, name: "Abbas Mazhar", team: "Raptors", val: 3.3 },
                        { rank: 6, name: "Jawad Naqvi", team: "Magic", val: 3.3 },
                        { rank: 7, name: "Hashim Shah", team: "Hawks", val: 3.2 },
                        { rank: 8, name: "Ali Naqvi", team: "Knicks", val: 3.0 },
                        { rank: 9, name: "Tamseel Raza", team: "Magic", val: 3.0 },
                        { rank: 10, name: "Furqan Jafri", team: "Magic", val: 3.0 }
                    ]
                },
                teams: [
                    {
                        teamName: "Bulls",
                        players: [
                            { name: "Ali Abidi Captain", gp: 6, ppg: 9.4, reb: 10.4, stl: 2.5, blk: 1.0, tpm: 1.3 },
                            { name: "Asim Abidi", gp: 6, ppg: 12.0, reb: 8.3, stl: 1.0, blk: 2.0, tpm: 2.0 },
                            { name: "Murtaza Hussain", gp: 6, ppg: 15.4, reb: 6.6, stl: 2.5, blk: 1.0, tpm: 2.0 },
                            { name: "Taqi Hussain", gp: 6, ppg: 15.2, reb: 5.2, stl: 1.0, blk: 0.0, tpm: 3.6 },
                            { name: "Zain Ali", gp: 6, ppg: 7.8, reb: 2.3, stl: 0.0, blk: 0.0, tpm: 2.0 },
                            { name: "Sheharyar Jafri", gp: 6, ppg: 5.6, reb: 4.0, stl: 0.0, blk: 0.0, tpm: 1.2 }
                        ]
                    },
                    {
                        teamName: "Lakers",
                        players: [
                            { name: "Hasnain Zaidi Captain", gp: 6, ppg: 13.2, reb: 7.7, stl: 2.0, blk: 2.0, tpm: 2.0 },
                            { name: "Syed Noeshare", gp: 6, ppg: 11.8, reb: 6.3, stl: 1.3, blk: 1.0, tpm: 1.0 },
                            { name: "Danyal Zaidi", gp: 6, ppg: 5.0, reb: 4.5, stl: 2.0, blk: 1.0, tpm: 1.0 },
                            { name: "Imran Zaidi", gp: 6, ppg: 15.8, reb: 9.0, stl: 1.5, blk: 2.0, tpm: 1.0 },
                            { name: "Kumail Syed", gp: 6, ppg: 6.5, reb: 4.8, stl: 1.0, blk: 1.0, tpm: 1.0 },
                            { name: "Murtaza Kazmi", gp: 6, ppg: 0.0, reb: 1.6, stl: 1.0, blk: 0.0, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Hawks",
                        players: [
                            { name: "Mohsin Jaffery Captain", gp: 6, ppg: 17.3, reb: 10.2, stl: 1.7, blk: 2.0, tpm: 2.7 },
                            { name: "Hamza Rizvi", gp: 6, ppg: 18.3, reb: 2.2, stl: 1.8, blk: 0.0, tpm: 4.3 },
                            { name: "Syed Daniyal", gp: 6, ppg: 12.6, reb: 9.0, stl: 1.0, blk: 1.5, tpm: 1.0 },
                            { name: "Hashim Shah", gp: 6, ppg: 18.5, reb: 8.0, stl: 1.0, blk: 1.5, tpm: 3.2 },
                            { name: "Husnain Mushtaq", gp: 6, ppg: 2.0, reb: 1.3, stl: 0.0, blk: 1.0, tpm: 0.0 }
                        ]
                    },
                    {
                        teamName: "Knicks",
                        players: [
                            { name: "Hamza Syed Captain", gp: 6, ppg: 17.2, reb: 8.6, stl: 2.0, blk: 1.0, tpm: 1.0 },
                            { name: "Ali Naqvi", gp: 6, ppg: 7.3, reb: 4.4, stl: 2.0, blk: 0.0, tpm: 3.0 },
                            { name: "Mohammad Naqvi", gp: 6, ppg: 7.2, reb: 4.5, stl: 2.0, blk: 1.0, tpm: 1.0 },
                            { name: "Mohammad Yasin", gp: 6, ppg: 8.6, reb: 6.4, stl: 0.0, blk: 1.0, tpm: 1.5 },
                            { name: "Ameer Abidi", gp: 6, ppg: 4.0, reb: 5.8, stl: 1.0, blk: 0.0, tpm: 0.0 },
                            { name: "Ilhan Zaidi", gp: 6, ppg: 4.5, reb: 2.6, stl: 0.0, blk: 0.0, tpm: 1.0 }
                        ]
                    },
                    {
                        teamName: "Raptors",
                        players: [
                            { name: "Zulfiqar Rizvi Captain", gp: 6, ppg: 39.4, reb: 10.8, stl: 1.3, blk: 0.0, tpm: 6.0 },
                            { name: "Mo Naqvi", gp: 6, ppg: 9.0, reb: 4.7, stl: 1.5, blk: 1.0, tpm: 2.4 },
                            { name: "Adil Abidi", gp: 6, ppg: 6.5, reb: 17.2, stl: 1.7, blk: 2.0, tpm: 0.0 },
                            { name: "Faraz Zaidi", gp: 6, ppg: 8.3, reb: 4.8, stl: 1.0, blk: 2.0, tpm: 1.7 },
                            { name: "Saif Zaidi", gp: 6, ppg: 2.0, reb: 1.5, stl: 0.0, blk: 0.0, tpm: 0.0 },
                            { name: "Abbas Mazhar", gp: 6, ppg: 12.0, reb: 5.8, stl: 2.0, blk: 2.0, tpm: 3.3 }
                        ]
                    },
                    {
                        teamName: "Magic",
                        players: [
                            { name: "Tamseel Raza Captain", gp: 6, ppg: 11.6, reb: 5.8, stl: 1.5, blk: 0.0, tpm: 3.0 },
                            { name: "Furqan Jafri", gp: 6, ppg: 12.0, reb: 5.5, stl: 0.0, blk: 0.0, tpm: 3.0 },
                            { name: "Jawad Naqvi", gp: 6, ppg: 11.4, reb: 8.3, stl: 1.8, blk: 2.0, tpm: 3.3 },
                            { name: "Rehan Azam", gp: 6, ppg: 5.0, reb: 10.3, stl: 1.0, blk: 1.0, tpm: 1.0 },
                            { name: "Imroze Jafri", gp: 6, ppg: 2.0, reb: 3.3, stl: 0.0, blk: 0.0, tpm: 0.0 },
                            { name: "Hussan Ali", gp: 6, ppg: 10.3, reb: 6.0, stl: 1.5, blk: 1.0, tpm: 2.3 }
                        ]
                    },
                    {
                        teamName: "Grizzlies",
                        players: [
                            { name: "Ali Abbas Naqvi Captain", gp: 6, ppg: 20.3, reb: 6.8, stl: 2.0, blk: 1.0, tpm: 3.7 },
                            { name: "Zain Jafri", gp: 6, ppg: 11.4, reb: 4.8, stl: 0.0, blk: 0.0, tpm: 2.3 },
                            { name: "Qasim Sheroz", gp: 6, ppg: 10.0, reb: 11.2, stl: 2.0, blk: 3.0, tpm: 1.3 },
                            { name: "Shaneali Hirji", gp: 6, ppg: 2.3, reb: 3.5, stl: 1.3, blk: 0.0, tpm: 0.0 },
                            { name: "Shayan Jafri", gp: 6, ppg: 4.3, reb: 3.0, stl: 1.5, blk: 1.0, tpm: 1.5 },
                            { name: "Kumail Jafri", gp: 6, ppg: 4.5, reb: 2.8, stl: 0.0, blk: 0.0, tpm: 2.0 }
                        ]
                    }
                ]
            }
        };
