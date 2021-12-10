<?php


namespace Route\Api;

use App\Http\Controllers\OrderController;
use \Illuminate\Support\Facades\Route;

class Order
{
    public static function register()
    {
        Route::middleware(['auth:sanctum'])->group(function () {
            Route::post('orders', [OrderController::class,'store'])->name('orders.store');
        });
    }
}