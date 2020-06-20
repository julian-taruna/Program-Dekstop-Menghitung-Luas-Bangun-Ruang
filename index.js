// Code Utama
const electron = require("electron");
const {app, BrowserWindow, Menu} = electron ;

let homeWindow;
let rumusWindow;

// Code Home On
app.on("ready", ()=> {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title : "Aplikasi Menghitung Luas Bangun Ruang"
    });


    homeWindow.loadURL(`file://${__dirname}/home.html`);
    homeWindow.on("closed", ()=> {

        app.quit();
        homeWindow = null;
    });

    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

// Bangun Ruang
// Link Jajar Genjang 
const createWindowCreatorjajarGenjang = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/jajarGenjang.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Kubus
const rumusWindowCreatorKubus = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/kubus.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Prisma Segitiga
const rumusWindowCreatorPriseg = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/prismaSegitiga.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Tabung
const rumusWindowCreatorTabung = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/tabung.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Kerucut
const rumusWindowCreatorKerucut = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/kerucut.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// <=====================================================>

// Bangun Datar
// Link Persegi
const rumusWindowCreatorPersegi = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/persegi.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Persegi Panjang
const rumusWindowCreatorPersegiPanjang = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/persegiPanjang.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Segitiga
const rumusWindowCreatorSegitiga = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/segitiga.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Belah Ketupat
const rumusWindowCreatorbelahKetupat = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/belahKetupat.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};

// Link Lingkaran
const rumusWindowCreatorlingkaran = () => {
    rumusWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600,
        title: "All Appoinments"
    });

    rumusWindow.setMenu(null);
    rumusWindow.loadURL(`file://${__dirname}/lingkaran.html`);
    rumusWindow.on("closed", () => (rumusWindow = null))
};


// Code Menu Template
const menuTemplate = [
    
    // Menu
    {
        label: "Menu",
        submenu: [
            { role: "reload" }, 
            { role: "toggledevtools" },
            {
                label: "Quit",
                accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl + O",
                
                click() {
                app.quit();
                }
            }
        ]
    },

    // Menu Formula A
    {
        label: "Rumus Bangun Ruang",
        submenu: [
            {
                label: "1. Jajar Genjang",
                
                click() {
                    createWindowCreatorjajarGenjang();
                }
            },
            {
                label: "2. Kubus",
                click() {
                    rumusWindowCreatorKubus();
                }
            },
            {
                label: "3. Prisma Segitiga",
                click() {
                    rumusWindowCreatorPriseg();
                }
            },
            {
                label: "4. Tabung",
                click() {
                    rumusWindowCreatorTabung();
                }
            },
            {
                label: "5. Kerucut",
                click() {
                    rumusWindowCreatorKerucut();
                }
            }
        
        ]
    },

    // Menu Formula B
    {
        label: "Rumus Bangun Datar",
        submenu: [
            {
                label: "1. Persegi",
                
                click() {
                    rumusWindowCreatorPersegi();
                }
            },
            {
                label: "2. Persegi Panjang",
                
                click() {
                    rumusWindowCreatorPersegiPanjang();
                }
            },
            {
                label: "3. Segitiga",
                click() {
                    rumusWindowCreatorSegitiga();
                }
            },
            {
                label: "4. Belah Ketupat",
                click() {
                    rumusWindowCreatorbelahKetupat();
                }
            },
            {
                label: "5. Lingkaran",
                click() {
                    rumusWindowCreatorlingkaran();
                }
            }
        
        ]
    }

]