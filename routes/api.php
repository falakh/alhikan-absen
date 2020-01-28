<?php

use App\Http\Controllers\LoginController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/login','LoginController@Login');

Route::post('/register','RegisterController@register');
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::post('/absen','LocationController@handle');
    Route::post('/addCabang','LocationController@AddCabang');
    Route::post('/nearMe','LocationController@findNearestCabangRequestHandler');
    Route::post('/getAllCabang','LocationController@GetAllCabang');
    Route::post('/absenPegawai','AbsenController@PegawaiAbsen');
    Route::get('/getAllAbsen','AbsenController@getAllData');
    Route::get('/getAllUser',"UserListController@getAllUser");


});





