const { contextBridge, shell, ipcRenderer } = require("electron");

console.log('preloading...', contextBridge, shell);

contextBridge.exposeInMainWorld("kopiaUI", {
    "selectDirectory": function (onSelected) {
        ipcRenderer.invoke('select-dir').then(v => {
            onSelected(v);
        });
    },
    "browseDirectory": function(path) {
        shell.openPath(path);
    },
})

