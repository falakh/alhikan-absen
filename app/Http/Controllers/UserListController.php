<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserListController extends Controller
{
    public function getAllUser(Request $request)
    {
        return User::all();
    }
}
