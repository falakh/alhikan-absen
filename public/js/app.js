(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
// require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
__webpack_require__(/*! ./page/index */ "./resources/js/page/index.tsx");

/***/ }),

/***/ "./resources/js/components/AbsensiDataTableComponent.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/AbsensiDataTableComponent.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const material_table_1 = __importDefault(__webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js"));
const react_async_1 = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");
const client_1 = __webpack_require__(/*! ../util/client */ "./resources/js/util/client.ts");
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const DialogTitle_1 = __importDefault(__webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js"));
const DialogContent_1 = __importDefault(__webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js"));
const DialogContentText_1 = __importDefault(__webpack_require__(/*! @material-ui/core/DialogContentText */ "./node_modules/@material-ui/core/esm/DialogContentText/index.js"));
function AbsensiDataTableComponent() {
    var [dataAbsensi, setDataAbsensi] = react_1.useState([]);
    var [dialogShown, setDialogShow] = react_1.useState(false);
    const { data, error, isLoading } = react_async_1.useAsync({ promiseFn: client_1.getAllAbsensi });
    if (isLoading) {
        return (react_1.default.createElement(core_1.CircularProgress, { style: { marginTop: "20%", marginLeft: "50%" } }));
    }
    if (error) {
        return (react_1.default.createElement("div", null, " ini err "));
    }
    if (data) {
        dataAbsensi = data;
    }
    return react_1.default.createElement("div", null,
        DialogEdit(dialogShown),
        react_1.default.createElement(material_table_1.default, { options: {
                search: false,
                emptyRowsWhenPaging: false,
                pageSize: 5,
                pageSizeOptions: []
            }, columns: [
                { title: 'Name', field: 'name' },
                { title: 'tanggal', field: 'created_at' },
                { title: 'cabang', field: 'cabang' }
            ], data: dataAbsensi }));
}
exports.default = AbsensiDataTableComponent;
function DialogEdit(show) {
    return react_1.default.createElement(core_1.Dialog, { fullScreen: false, open: show, "aria-labelledby": "responsive-dialog-title" },
        react_1.default.createElement(DialogTitle_1.default, { id: "responsive-dialog-title" }, "Use Google's location service?"),
        react_1.default.createElement(DialogContent_1.default, null,
            react_1.default.createElement(DialogContentText_1.default, null, "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.")),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { autoFocus: true, color: "primary" }, "Disagree"),
            react_1.default.createElement(core_1.Button, { color: "primary", autoFocus: true }, "Agree")));
}


/***/ }),

/***/ "./resources/js/components/AddLocationTable.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/AddLocationTable.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const client_1 = __webpack_require__(/*! ../util/client */ "./resources/js/util/client.ts");
const material_table_1 = __importDefault(__webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const CabangListAction_1 = __webpack_require__(/*! ../redux/action/LocationListAction/CabangListAction */ "./resources/js/redux/action/LocationListAction/CabangListAction.ts");
function LocationTable() {
    // const { data, error, isLoading } = useAsync({ promiseFn: getAllLokasi });
    var [isEdit, setEdit] = react_1.useState(false);
    var cabangState = (state) => state.cabang;
    var cabang = react_redux_1.useSelector(cabangState);
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (!cabang.isFound) {
            dispatch(CabangListAction_1.GetAllCabangAction());
        }
    });
    return (react_1.default.createElement("div", null,
        cabang.isLoading && (react_1.default.createElement(core_1.Dialog, { open: true, maxWidth: "md", disableBackdropClick: true, disableEscapeKeyDown: true },
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.CircularProgress, { style: { marginLeft: "50%" } }),
                react_1.default.createElement(core_1.DialogContentText, { style: { marginTop: 20 } },
                    react_1.default.createElement(core_1.Typography, null, " Tolong Menunggu "))))),
        DialogEdit(isEdit, () => setEdit(false)),
        react_1.default.createElement(material_table_1.default, { options: {
                search: false,
                emptyRowsWhenPaging: false,
                pageSizeOptions: []
            }, actions: [
                {
                    icon: "add",
                    tooltip: "Add User",
                    isFreeAction: true,
                    onClick: () => setEdit(true)
                }
            ], title: "Lokasi", columns: [
                { title: "Name", field: "name" },
                { title: "Alamat", field: "addres" },
                { title: "latitude", field: "latitude" },
                { title: "longitude", field: "longitude" }
            ], data: cabang.data })));
}
exports.default = LocationTable;
function getLocation(succesCallback) {
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(position => {
            succesCallback(position);
        }, error => {
            switch (error.code) {
                case 1:
                    console.log("Permission Denied");
                    break;
                case 2:
                    console.log("Position Unavailable");
                    break;
                case 3:
                    console.log("Timeout");
                    break;
            }
        });
    }
}
function DialogEdit(show, onClose) {
    var [nama, setName] = react_1.default.useState("");
    var [alamat, setAlamat] = react_1.default.useState("");
    var [latitude, setLatitude] = react_1.default.useState(0.0);
    var [longitude, setLongitude] = react_1.default.useState(0.0);
    var [radius, setRadius] = react_1.default.useState("0.0");
    return (react_1.default.createElement(core_1.Dialog, { fullScreen: false, open: show, onClose: onClose, "aria-labelledby": "responsive-dialog-title" },
        react_1.default.createElement(core_1.DialogTitle, { id: "responsive-dialog-title" }, "Use Google's location service?"),
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.DialogContentText, null,
                react_1.default.createElement(core_1.TextField, { label: "Nama", placeholder: "Nama", value: nama, onChange: event => setName(event.target.value), fullWidth: true }),
                react_1.default.createElement(core_1.TextField, { value: alamat, label: "Alamat", placeholder: "Alamat", onChange: event => setAlamat(event.target.value), fullWidth: true }),
                react_1.default.createElement(core_1.TextField, { value: radius, label: "Radius", placeholder: "Radius", onChange: event => setRadius(event.target.value), fullWidth: true }),
                react_1.default.createElement(core_1.TextField, { placeholder: "Koordinat", fullWidth: true, disabled: true, value: latitude + " , " + longitude, InputProps: {
                        endAdornment: (react_1.default.createElement(core_1.InputAdornment, { position: "end" },
                            react_1.default.createElement(core_1.Button, { onClick: () => getLocation(position => {
                                    setLongitude(position.coords.longitude);
                                    setLatitude(position.coords.latitude);
                                }) }, "Get Lokasi")))
                    } }))),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { autoFocus: true, color: "primary" }, "Cancel"),
            react_1.default.createElement(core_1.Button, { color: "primary", autoFocus: true, onClick: () => {
                    client_1.addLokasi({
                        addres: alamat,
                        latitude: latitude,
                        longitude: longitude,
                        created_at: "",
                        id: 0,
                        name: nama,
                        radius: radius,
                        updated_at: ""
                    }).then(() => {
                        window.location.reload();
                    });
                } }, "Send"))));
}


/***/ }),

/***/ "./resources/js/components/JabatanTableList.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/JabatanTableList.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const material_table_1 = __importDefault(__webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js"));
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const JabatanActionList_1 = __webpack_require__(/*! ../redux/action/ListJabatan/JabatanActionList */ "./resources/js/redux/action/ListJabatan/JabatanActionList.ts");
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function JabatanDataTable() {
    var cabangState = (state) => state.jabatan;
    var state = react_redux_1.useSelector(cabangState);
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(() => {
        if (!state.isFound) {
            dispatch(JabatanActionList_1.GetAllJabatanAction());
        }
    });
    if (state.isLoading) {
        console.log("loading");
        return Progres();
    }
    return react_1.default.createElement("div", null,
        " ",
        DataTableJabatan(state),
        " ");
}
exports.default = JabatanDataTable;
//     {
//         "id": 1,
//         "created_at": "2020-02-09 12:08:11",
//         "updated_at": "2020-03-23 02:18:01",
//         "jabtan": "rumah",
//         "jamMasuk": "08:00:00",
//         "jamPulang": "14:00:00",
//         "toleransiDatang": "00:00:12",
//         "toleransiPulang": "02:00:01"
//     }
// ]
function DataTableJabatan(state) {
    return (react_1.default.createElement(material_table_1.default, { title: "Data Jabatan", columns: [
            { title: "jabatan", field: "jabtan" },
            {
                title: "Jam Masuk",
                field: "jamMasuk"
            },
            {
                title: "Jam Pulang",
                field: "jamPulang"
            },
            {
                title: "Toleransi Keterlambatan ",
                field: "toleransiDatang"
            }, {
                title: "Toleransi Pulang ",
                field: "toleransiPulang"
            }
        ], data: state.data }));
}
function Progres() {
    return (react_1.default.createElement(core_1.Dialog, { open: true, maxWidth: "md", disableBackdropClick: true, disableEscapeKeyDown: true },
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.CircularProgress, { style: { marginLeft: "50%" } }),
            react_1.default.createElement(core_1.DialogContentText, { style: { marginTop: 20 } },
                react_1.default.createElement(core_1.Typography, null, " Tolong Menunggu ")))));
}


/***/ }),

/***/ "./resources/js/components/LoginCard.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/LoginCard.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const esm_1 = __webpack_require__(/*! @material-ui/core/esm */ "./node_modules/@material-ui/core/esm/index.js");
const client_1 = __webpack_require__(/*! ../util/client */ "./resources/js/util/client.ts");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const UserAction_1 = __webpack_require__(/*! ../redux/action/UserAction/UserAction */ "./resources/js/redux/action/UserAction/UserAction.ts");
function LoginCard() {
    const [email, setEmail] = react_1.default.useState("");
    const [password, setPassword] = react_1.default.useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const isUserLogin = (state) => state.user.isLoading;
    const isLogin = react_redux_1.useSelector(isUserLogin);
    const dispatch = react_redux_1.useDispatch();
    console.log(isLogin);
    return (react_1.default.createElement(esm_1.Container, { maxWidth: "xs", style: { transform: "translate(0%,15%)" } },
        react_1.default.createElement(esm_1.Card, { elevation: 10 },
            react_1.default.createElement(esm_1.CardContent, null,
                react_1.default.createElement(esm_1.TextField, { fullWidth: true, placeholder: "Email@mail.com", label: "Email", onChange: handleEmailChange })),
            react_1.default.createElement(esm_1.CardContent, null,
                react_1.default.createElement(esm_1.TextField, { fullWidth: true, placeholder: "*****", label: "Password", type: "password", onChange: handlePasswordChange })),
            react_1.default.createElement(esm_1.CardContent, null,
                react_1.default.createElement(esm_1.Button, { disabled: isLogin, fullWidth: true, color: "primary", onClick: () => {
                        dispatch(UserAction_1.userLogin({
                            email: email,
                            password: password
                        }));
                        client_1.Login({
                            email: email,
                            password: password
                        }, {
                            OnEror: eror => alert(eror),
                            OnSucces: result => console.log(result)
                        });
                    }, variant: "outlined" }, "Login")))));
}
exports.default = LoginCard;


/***/ }),

/***/ "./resources/js/components/MobileUserTableComponent.tsx":
/*!**************************************************************!*\
  !*** ./resources/js/components/MobileUserTableComponent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_async_1 = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");
const client_1 = __webpack_require__(/*! ../util/client */ "./resources/js/util/client.ts");
const material_table_1 = __importDefault(__webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js"));
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const ProgressCircleComponent_1 = __importDefault(__webpack_require__(/*! ../components/ProgressCircleComponent */ "./resources/js/components/ProgressCircleComponent.tsx"));
function MobileUserTable() {
    var [mobileUserList, setMobileUserList] = react_1.default.useState([]);
    const { data, error, isLoading } = react_async_1.useAsync({ promiseFn: client_1.getAllMobileUser }, []);
    if (data) {
        return MobileUserUi(data.data);
    }
    if (isLoading) {
        return ProgressCircleComponent_1.default();
    }
    return react_1.default.createElement("div", null, " ini tabel");
}
exports.default = MobileUserTable;
/**
  {
        "id": 1,
        "deviceId": "3",
        "user_id": 1,
        "created_at": "2020-01-26 03:53:26",
        "updated_at": "2020-01-26 03:53:26",
        "email": "falakh@mail.com",
        "password": "fahmi134679",
        "name": "zul",
        "nidn": "16515161",
        "alamat": "123123",
        "status": "mahasiswa"
    }
 */
function MobileUserUi(data) {
    return react_1.default.createElement(material_table_1.default, { data: data, columns: [
            {
                field: "id",
                title: "idLogin"
            }, {
                field: "deviceId",
                title: "id perangkat"
            }, {
                field: "nidn",
                title: "nidn"
            }, {
                field: "name",
                title: "nama"
            }, {
                field: "status",
                title: "status"
            }, {
                title: "detail",
                render: (props) => react_1.default.createElement(core_1.Button, null, "Detail ")
            }
        ] });
}
exports.MobileUserUi = MobileUserUi;


/***/ }),

/***/ "./resources/js/components/NavBar.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/NavBar.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const UIActionLIst_1 = __webpack_require__(/*! ../redux/action/UIAction/UIActionLIst */ "./resources/js/redux/action/UIAction/UIActionLIst.ts");
const drawerWidth = 240;
const useStyle = core_1.makeStyles((theme) => core_1.createStyles({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    hide: {
        display: "none"
    },
    drawerHeader: Object.assign(Object.assign({ display: "flex", alignItems: "center", padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: "flex-end" }),
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth,
        overscrollBehaviorY: "auto"
    },
    contentShift: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        overscrollBehaviorY: "auto"
    },
    toolbar: theme.mixins.toolbar
}));
function NavBar() {
    // var [openDrawer, setOpenDrawer] = React.useState(false);
    var cabangState = (state) => state.ui;
    var uiState = react_redux_1.useSelector(cabangState);
    var dispatch = react_redux_1.useDispatch();
    var handleMenuButton = () => dispatch(UIActionLIst_1.setDrawer(!uiState.isDrawerOpen));
    const classes = useStyle();
    return react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.AppBar, { position: "fixed", className: classes.appBar },
            react_1.default.createElement(core_1.Toolbar, null,
                react_1.default.createElement(core_1.IconButton, { about: "Menu", onClick: handleMenuButton, edge: "start", color: "inherit", "aria-label": "menu" },
                    react_1.default.createElement("div", { className: "material-icons" }, "menu")),
                react_1.default.createElement(core_1.Typography, { variant: "h6", noWrap: true }, "Sistem Kehadiran"))),
        react_1.default.createElement(core_1.Drawer, { variant: "persistent", open: uiState.isDrawerOpen, className: classes.drawer, classes: {
                paper: classes.drawerPaper
            } },
            react_1.default.createElement("div", { className: classes.toolbar }),
            react_1.default.createElement(core_1.List, null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/dashboard", className: "nav-link", style: { textDecoration: "none" } },
                    react_1.default.createElement(core_1.ListItem, { button: true },
                        react_1.default.createElement(core_1.ListItemIcon, null,
                            react_1.default.createElement("div", { className: "material-icons" }, "today")),
                        react_1.default.createElement(core_1.ListItemText, { primary: "Kehadiran" }))),
                react_1.default.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/dashboard/lokasi", style: { textDecoration: "none" } },
                    react_1.default.createElement(core_1.ListItem, { button: true },
                        react_1.default.createElement(core_1.ListItemIcon, null,
                            react_1.default.createElement("div", { className: "material-icons" }, "pin_drop")),
                        react_1.default.createElement(core_1.ListItemText, { primary: "Lokasi" }))),
                react_1.default.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/dashboard/userList", style: { textDecoration: "none" } },
                    react_1.default.createElement(core_1.ListItem, { button: true },
                        react_1.default.createElement(core_1.ListItemIcon, null,
                            react_1.default.createElement("div", { className: "material-icons" }, "person")),
                        react_1.default.createElement(core_1.ListItemText, { primary: "UserList" }))),
                react_1.default.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/dashboard/jabatan", style: { textDecoration: "none" } },
                    react_1.default.createElement(core_1.ListItem, { button: true },
                        react_1.default.createElement(core_1.ListItemIcon, null,
                            react_1.default.createElement("div", { className: "material-icons" }, "mobile_screen_share")),
                        react_1.default.createElement(core_1.ListItemText, { primary: "Mobile User" }))),
                react_1.default.createElement(react_router_dom_1.NavLink, { className: "nav-link", to: "/dashboard/mobileUser", style: { textDecoration: "none" } },
                    react_1.default.createElement(core_1.ListItem, { button: true },
                        react_1.default.createElement(core_1.ListItemIcon, null,
                            react_1.default.createElement("div", { className: "material-icons" }, "mobile_screen_share")),
                        react_1.default.createElement(core_1.ListItemText, { primary: "Mobile User" }))))));
}
exports.NavBar = NavBar;


/***/ }),

/***/ "./resources/js/components/ProgressCircleComponent.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/ProgressCircleComponent.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
function Progres() {
    return (react_1.default.createElement(core_1.Dialog, { open: true, maxWidth: "md", disableBackdropClick: true, disableEscapeKeyDown: true },
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.CircularProgress, { style: { marginLeft: "50%" } }),
            react_1.default.createElement(core_1.DialogContentText, { style: { marginTop: 20 } },
                react_1.default.createElement(core_1.Typography, null, " Tolong Menunggu ")))));
}
exports.default = Progres;


/***/ }),

/***/ "./resources/js/components/UserListDataTableComponent.tsx":
/*!****************************************************************!*\
  !*** ./resources/js/components/UserListDataTableComponent.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const material_table_1 = __importDefault(__webpack_require__(/*! material-table */ "./node_modules/material-table/dist/index.js"));
const client_1 = __webpack_require__(/*! ../util/client */ "./resources/js/util/client.ts");
const react_async_1 = __webpack_require__(/*! react-async */ "./node_modules/react-async/dist-web/index.js");
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
function UserListDataTableComponent() {
    var _a;
    const { data, error, isLoading } = react_async_1.useAsync({ promiseFn: client_1.getAllUser });
    if (isLoading) {
        return react_1.default.createElement(core_1.CircularProgress, { style: { marginTop: "20%", marginLeft: "50%" } });
    }
    return (react_1.default.createElement(material_table_1.default, { options: {
            search: false,
            emptyRowsWhenPaging: false,
            pageSizeOptions: []
        }, title: "User List", columns: [
            { title: "Name", field: "name" },
            { title: "email", field: "email" },
            { title: "id", field: "nidn" },
            { title: "alamat", field: "alamat" },
            { title: "status", field: "status" }
        ], data: (_a = data) === null || _a === void 0 ? void 0 : _a.data }));
}
exports.default = UserListDataTableComponent;


/***/ }),

/***/ "./resources/js/page/Dashboard.tsx":
/*!*****************************************!*\
  !*** ./resources/js/page/Dashboard.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const clsx_1 = __importDefault(__webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const NavBar_1 = __webpack_require__(/*! ../components/NavBar */ "./resources/js/components/NavBar.tsx");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
const drawerWidth = 240;
const useStyle = core_1.makeStyles((theme) => core_1.createStyles({
    root: {
        display: "flex",
        position: "relative"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    hide: {
        display: "none"
    },
    drawerHeader: Object.assign(Object.assign({ display: "flex", alignItems: "center", padding: theme.spacing(0, 1) }, theme.mixins.toolbar), { justifyContent: "flex-end" }),
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth,
        overscrollBehaviorY: "auto"
    },
    contentShift: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        overscrollBehaviorY: "auto"
    },
    toolbar: theme.mixins.toolbar
}));
function Dashboard() {
    var cabangState = (state) => state.ui;
    var uiState = react_redux_1.useSelector(cabangState);
    const classes = useStyle();
    return (react_1.default.createElement("div", { style: { position: "relative" }, className: classes.root },
        react_1.default.createElement(core_1.CssBaseline, null),
        react_1.default.createElement(NavBar_1.NavBar, null),
        react_1.default.createElement("main", { className: clsx_1.default({
                [classes.content]: !uiState.isDrawerOpen,
                [classes.contentShift]: uiState.isDrawerOpen
            }) },
            react_1.default.createElement("div", { className: classes.drawerHeader }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard/lokasi", component: react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackPrefetch: true */ /*! ../components/AddLocationTable */ "./resources/js/components/AddLocationTable.tsx")))) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard", component: react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackPrefetch: true */ /*! ../components/AbsensiDataTableComponent */ "./resources/js/components/AbsensiDataTableComponent.tsx")))), exact: true }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard/userlist", component: react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackPrefetch: true */ /*! ../components/UserListDataTableComponent */ "./resources/js/components/UserListDataTableComponent.tsx")))) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard/jabatan", component: /* webpackPrefetch: true */ react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ../components/JabatanTableList */ "./resources/js/components/JabatanTableList.tsx")))) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard/mobileUser", component: /* webpackPrefetch: true */ react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ../components/MobileUserTableComponent */ "./resources/js/components/MobileUserTableComponent.tsx")))) }))));
}
exports.default = Dashboard;


/***/ }),

/***/ "./resources/js/page/IndexPage.tsx":
/*!*****************************************!*\
  !*** ./resources/js/page/IndexPage.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
const react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function App(props) {
    return (react_1.default.createElement(react_redux_1.Provider, { store: props.store },
        react_1.default.createElement(RouterComponent, null)));
}
exports.default = App;
function RouterComponent() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("div", null, "Loading...") },
            react_1.default.createElement(react_router_dom_1.Route, { path: "/login", component: react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./LoginPage */ "./resources/js/page/LoginPage.tsx")))) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/dashboard", component: react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackChunkName: "dashboard" */ /*! ./Dashboard */ "./resources/js/page/Dashboard.tsx")))) }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/" }))));
}


/***/ }),

/***/ "./resources/js/page/LoginPage.tsx":
/*!*****************************************!*\
  !*** ./resources/js/page/LoginPage.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const core_1 = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
const LoginCard_1 = __importDefault(__webpack_require__(/*! ../components/LoginCard */ "./resources/js/components/LoginCard.tsx"));
class LoginPage extends react_1.Component {
    render() {
        return (react_1.default.createElement(core_1.Container, { maxWidth: "xl", style: {
                height: "100%",
                width: "100%",
                margin: 0,
                backgroundColor: "#32415a",
                display: "flex",
                position: "fixed"
            } },
            react_1.default.createElement(LoginCard_1.default, null)));
    }
}
exports.default = LoginPage;


/***/ }),

/***/ "./resources/js/page/index.tsx":
/*!*************************************!*\
  !*** ./resources/js/page/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const store_1 = __webpack_require__(/*! ../redux/store */ "./resources/js/redux/store/index.ts");
// import { App } from "./IndexPage";
const redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
const redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"));
var data = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));
if (document.getElementById("example")) {
    const OtherComponent = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/* webpackChunkName: "dynamically-imported-component" */ /*! ../page/IndexPage */ "./resources/js/page/IndexPage.tsx"))));
    react_dom_1.default.render(react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement("div", null) },
        react_1.default.createElement(OtherComponent, { store: data })), document.getElementById("example"));
}


/***/ }),

/***/ "./resources/js/redux/action/ListJabatan/JabatanActionList.ts":
/*!********************************************************************!*\
  !*** ./resources/js/redux/action/ListJabatan/JabatanActionList.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CabangListActionType_1 = __webpack_require__(/*! ../LocationListAction/CabangListActionType */ "./resources/js/redux/action/LocationListAction/CabangListActionType.ts");
const client_1 = __webpack_require__(/*! ../../../util/client */ "./resources/js/util/client.ts");
const JabatanActionType_1 = __webpack_require__(/*! ./JabatanActionType */ "./resources/js/redux/action/ListJabatan/JabatanActionType.ts");
function GetAllJabatanAction() {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        try {
            dispatch({
                type: JabatanActionType_1.GET_JABATAN_LOADNG
            });
            var data = yield client_1.getAllJabatanData();
            console.log(data);
            var hasil = {
                payload: data,
                type: JabatanActionType_1.GET_JABATAN_SUCCES
            };
            dispatch(hasil);
        }
        catch (error) {
            dispatch({ type: CabangListActionType_1.GET_LOCATIONLIST_FAILED });
            console.log("eror gan");
        }
    });
}
exports.GetAllJabatanAction = GetAllJabatanAction;


/***/ }),

/***/ "./resources/js/redux/action/ListJabatan/JabatanActionType.ts":
/*!********************************************************************!*\
  !*** ./resources/js/redux/action/ListJabatan/JabatanActionType.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_JABATAN_REFRESH = "GET_JABATAN_REFRESH";
exports.GET_JABATAN_SUCCES = "GET_LOCATIONLIST_SUCCES";
exports.GET_LOCATIONLIST_FAILED = "GET_LOCATIONLIST_FAILED";
exports.GET_JABATAN_LOADNG = "GET_JABATAN_LOADNG";


/***/ }),

/***/ "./resources/js/redux/action/LocationListAction/CabangListAction.ts":
/*!**************************************************************************!*\
  !*** ./resources/js/redux/action/LocationListAction/CabangListAction.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __webpack_require__(/*! ../../../util/client */ "./resources/js/util/client.ts");
const CabangListActionType_1 = __webpack_require__(/*! ../LocationListAction/CabangListActionType */ "./resources/js/redux/action/LocationListAction/CabangListActionType.ts");
function GetAllCabangAction() {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        try {
            dispatch({
                type: CabangListActionType_1.GET_LOCATIONLIST_LOADNG
            });
            var data = yield client_1.getAllLokasi();
            console.log(data);
            var hasil = {
                payload: data,
                type: CabangListActionType_1.GET_LOCATIONLIST_SUCCES
            };
            dispatch(hasil);
        }
        catch (error) {
            dispatch({ type: CabangListActionType_1.GET_LOCATIONLIST_FAILED });
            console.log("eror gan");
        }
    });
}
exports.GetAllCabangAction = GetAllCabangAction;


/***/ }),

/***/ "./resources/js/redux/action/LocationListAction/CabangListActionType.ts":
/*!******************************************************************************!*\
  !*** ./resources/js/redux/action/LocationListAction/CabangListActionType.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_LOCATIONLIST_REFRESH = "GET_LOCATIONLIST_REFRESH";
exports.GET_LOCATIONLIST_SUCCES = "GET_LOCATIONLIST_SUCCES";
exports.GET_LOCATIONLIST_FAILED = "GET_LOCATIONLIST_FAILED";
exports.GET_LOCATIONLIST_LOADNG = "GET_LOCATIONLIST_LOADNG";


/***/ }),

/***/ "./resources/js/redux/action/UIAction/UIActionLIst.ts":
/*!************************************************************!*\
  !*** ./resources/js/redux/action/UIAction/UIActionLIst.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UIActionType_1 = __webpack_require__(/*! ./UIActionType */ "./resources/js/redux/action/UIAction/UIActionType.ts");
function setDrawer(isOpen) {
    return (dispatch) => __awaiter(this, void 0, void 0, function* () {
        if (isOpen) {
            dispatch({
                type: UIActionType_1.OPEN_DRAWER,
            });
        }
        else {
            dispatch({
                type: UIActionType_1.CLOSE_DRAWER,
            });
        }
    });
}
exports.setDrawer = setDrawer;


/***/ }),

/***/ "./resources/js/redux/action/UIAction/UIActionType.ts":
/*!************************************************************!*\
  !*** ./resources/js/redux/action/UIAction/UIActionType.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OPEN_DRAWER = "OPEN_DRAWER";
exports.CLOSE_DRAWER = "CLOSE_DRAWER";


/***/ }),

/***/ "./resources/js/redux/action/UserAction/UserAction.ts":
/*!************************************************************!*\
  !*** ./resources/js/redux/action/UserAction/UserAction.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserActionType_1 = __webpack_require__(/*! ../UserAction/UserActionType */ "./resources/js/redux/action/UserAction/UserActionType.ts");
const client_1 = __webpack_require__(/*! ../../../util/client */ "./resources/js/util/client.ts");
exports.userLogin = (user) => {
    return (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            dispatch(UserAwait());
            const asyncResp = yield client_1.loginRequestOnly(user);
            var hasil = {
                payload: asyncResp.data,
                type: UserActionType_1.LOGIN_SUCCES
            };
            dispatch(hasil);
        }
        catch (_a) {
            var error = {
                payload: null,
                type: UserActionType_1.LOGIN_FAILED
            };
            dispatch(error);
        }
    });
};
function UserAwait() {
    return {
        type: UserActionType_1.LOGIN_LOADING,
        payload: null
    };
}


/***/ }),

/***/ "./resources/js/redux/action/UserAction/UserActionType.ts":
/*!****************************************************************!*\
  !*** ./resources/js/redux/action/UserAction/UserActionType.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_LOGIN = "USER_LOGIN";
exports.LOGIN_SUCCES = "USER_LOGIN_SUCCES";
exports.LOGIN_FAILED = "USER_LOGIN_FAILED";
exports.LOGIN_LOADING = "USER_LOGIN_LOADING";


/***/ }),

/***/ "./resources/js/redux/reducer/CabangReducer.ts":
/*!*****************************************************!*\
  !*** ./resources/js/redux/reducer/CabangReducer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const CabangListActionType_1 = __webpack_require__(/*! ../action/LocationListAction/CabangListActionType */ "./resources/js/redux/action/LocationListAction/CabangListActionType.ts");
const initialState = {
    data: [],
    isEror: false,
    isLoading: false,
    isFound: false,
};
function cabangReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case CabangListActionType_1.GET_LOCATIONLIST_REFRESH:
            return Object.assign(Object.assign({}, state), { isLoading: true, isEror: false, isFound: true });
        case CabangListActionType_1.GET_LOCATIONLIST_SUCCES:
            return Object.assign(Object.assign({}, state), { data: action.payload, isLoading: false, isFound: true });
        case CabangListActionType_1.GET_LOCATIONLIST_FAILED:
            return Object.assign(Object.assign({}, state), { isEror: true, isLoading: false, isFound: true });
        case CabangListActionType_1.GET_LOCATIONLIST_LOADNG:
            return Object.assign(Object.assign({}, state), { isLoading: true, isEror: false, isFound: true });
    }
    return state;
}
exports.cabangReducer = cabangReducer;


/***/ }),

/***/ "./resources/js/redux/reducer/JabtanReducer.ts":
/*!*****************************************************!*\
  !*** ./resources/js/redux/reducer/JabtanReducer.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const JabatanActionType_1 = __webpack_require__(/*! ../action/ListJabatan/JabatanActionType */ "./resources/js/redux/action/ListJabatan/JabatanActionType.ts");
var initialState = {
    data: [],
    isEror: false,
    isFound: false,
    isLoading: false
};
function jabatanReducer(state = initialState, action) {
    console.log(action.type);
    switch (action.type) {
        case JabatanActionType_1.GET_JABATAN_REFRESH:
            return Object.assign(Object.assign({}, state), { isLoading: true, isEror: false, isFound: false });
        case JabatanActionType_1.GET_JABATAN_SUCCES:
            return Object.assign(Object.assign({}, state), { data: action.payload, isLoading: false, isFound: true });
    }
    return state;
}
exports.jabatanReducer = jabatanReducer;


/***/ }),

/***/ "./resources/js/redux/reducer/UIReducer.ts":
/*!*************************************************!*\
  !*** ./resources/js/redux/reducer/UIReducer.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UIActionType_1 = __webpack_require__(/*! ../action/UIAction/UIActionType */ "./resources/js/redux/action/UIAction/UIActionType.ts");
const initialState = {
    isDrawerOpen: false
};
function UIReducer(state = initialState, action) {
    switch (action.type) {
        case UIActionType_1.OPEN_DRAWER:
            return Object.assign(Object.assign({}, state), { isDrawerOpen: true });
        case UIActionType_1.CLOSE_DRAWER:
            return Object.assign(Object.assign({}, state), { isDrawerOpen: false });
        default:
            return state;
            break;
    }
}
exports.UIReducer = UIReducer;


/***/ }),

/***/ "./resources/js/redux/reducer/UserReducer.ts":
/*!***************************************************!*\
  !*** ./resources/js/redux/reducer/UserReducer.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UserActionType_1 = __webpack_require__(/*! ../action/UserAction/UserActionType */ "./resources/js/redux/action/UserAction/UserActionType.ts");
const initialState = {
    data: null,
    isAdmin: false,
    isLogin: false,
    isEror: false,
    isLoading: false,
};
function userReducer(state = initialState, action) {
    switch (action.type) {
        case UserActionType_1.LOGIN_LOADING:
            return {
                data: null,
                isAdmin: false,
                isEror: false,
                isLoading: true,
                isLogin: false,
            };
        case UserActionType_1.LOGIN_SUCCES:
            return {
                data: action.payload,
                isAdmin: false,
                isEror: false,
                isLoading: false,
                isLogin: true,
            };
        case UserActionType_1.LOGIN_FAILED:
            return {
                data: null,
                isAdmin: false,
                isEror: false,
                isLoading: true,
                isLogin: true,
            };
        default:
            return state;
    }
}
exports.userReducer = userReducer;


/***/ }),

/***/ "./resources/js/redux/store/index.ts":
/*!*******************************************!*\
  !*** ./resources/js/redux/store/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const UserReducer_1 = __webpack_require__(/*! ../reducer/UserReducer */ "./resources/js/redux/reducer/UserReducer.ts");
const redux_1 = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
const CabangReducer_1 = __webpack_require__(/*! ../reducer/CabangReducer */ "./resources/js/redux/reducer/CabangReducer.ts");
const JabtanReducer_1 = __webpack_require__(/*! ../reducer/JabtanReducer */ "./resources/js/redux/reducer/JabtanReducer.ts");
const UIReducer_1 = __webpack_require__(/*! ../reducer/UIReducer */ "./resources/js/redux/reducer/UIReducer.ts");
exports.rootReducer = redux_1.combineReducers({
    user: UserReducer_1.userReducer,
    cabang: CabangReducer_1.cabangReducer,
    ui: UIReducer_1.UIReducer,
    jabatan: JabtanReducer_1.jabatanReducer
});


/***/ }),

/***/ "./resources/js/util/client.ts":
/*!*************************************!*\
  !*** ./resources/js/util/client.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));
function getAllMobileUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get('/api/allMobileUser');
    });
}
exports.getAllMobileUser = getAllMobileUser;
function Login(loginInput, loginEvent) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var hasil = yield loginRequestOnly(loginInput);
            (_a = loginEvent) === null || _a === void 0 ? void 0 : _a.OnSucces(hasil.data);
        }
        catch (eror) {
            console.log(eror);
            (_b = loginEvent) === null || _b === void 0 ? void 0 : _b.OnEror(eror);
        }
    });
}
exports.Login = Login;
function loginRequestOnly(loginInput) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield axios_1.default.post("/api/login", loginInput);
    });
}
exports.loginRequestOnly = loginRequestOnly;
function getAllJabatanData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (yield axios_1.default.get("/api/getAllJabatan")).data;
    });
}
exports.getAllJabatanData = getAllJabatanData;
function getAllLokasi() {
    return __awaiter(this, void 0, void 0, function* () {
        var hasil = yield axios_1.default.post("/api/getAllCabang");
        return hasil.data;
    });
}
exports.getAllLokasi = getAllLokasi;
function getAllAbsensi() {
    return __awaiter(this, void 0, void 0, function* () {
        var hasil = yield axios_1.default.get("/api/getAllAbsen");
        return hasil.data;
    });
}
exports.getAllAbsensi = getAllAbsensi;
function addLokasi(cabang) {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.post("/api/addCabang", {
            "latitude": cabang.latitude,
            "longitude": cabang.longitude,
            "name": cabang.name,
            "radius": cabang.radius,
            "addres": cabang.addres
        });
    });
}
exports.addLokasi = addLokasi;
function getAllUser() {
    return __awaiter(this, void 0, void 0, function* () {
        return axios_1.default.get('/api/getAllUser');
    });
}
exports.getAllUser = getAllUser;


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./resources/js/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\belajar\Al-Hikam\absensi\resources\js\app.js */"./resources/js/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);