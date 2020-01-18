<?php
/**
 * Created by PhpStorm.
 * User: dbss092
 * Date: 25/12/2019
 * Time: 19:45
 */

namespace App\Http\Middleware;

use  Closure;
use Illuminate\Http\Request;

class AuthUser
{
    public function handle(Request $request, Closure $next)
    {
        // Perform action

        return $next($request);
    }
}