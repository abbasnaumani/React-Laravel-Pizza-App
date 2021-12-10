<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orderitems = [
            ['product_id' => 1,"order_id"=>1,'quantity'=>2,'price'=>20.00,'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['product_id' => 2,"order_id"=>1,'quantity'=>3,'price'=>36.00,'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['product_id' => 4,"order_id"=>2,'quantity'=>1,'price'=>13.00,  'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['product_id' => 6,"order_id"=>3,'quantity'=>1,'price'=>15.99 ,'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
        ];
        DB::table('order_items')->insert($orderitems);
    }
}
