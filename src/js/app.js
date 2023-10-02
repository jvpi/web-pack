import geolocalizacion from "./geolocalizacion/index.js";
import modal from "./modal/index.js";
import Selectbox from "./modal/Selectbox.js";
import validarsw from "./validarsw.js";
import btnInstall from "./btn-install/btnInstall.js";
export default function () {
    geolocalizacion()
    modal()
    Selectbox()
    validarsw()
    btnInstall()
}


