<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Route\Api\Auth;
use Route\Api\Order;
use Route\Api\Product;
use Route\Api\User;
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
Auth::register();
User::register();
Product::register();
Order::register();
\Route\Api\Test::register();
\Route\Api\Upload::register();
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
