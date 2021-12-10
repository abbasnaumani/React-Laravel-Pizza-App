<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = [
            ['name' => 'Peri Peri','price' => 10.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>1,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Tex-Mex','price' => 12.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>2,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Chicken Tikka','price' => 11.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>3,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Legend - Ranch','price' => 13.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>4,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Hot & Spicy','price' => 10.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>5,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Pakistani Hot','price' => 15.99,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>6,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Tandoori Hot','price' => 14.00,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>7,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['name' => 'Legend -BBQ','price' => 10.99,'description'=>'Crispy chicken, onions & tomatoes, topped with Sauce.','image_id'=>8,'category_id'=>1, 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],

        ];
        DB::table('products')->insert($products);
    }
}
