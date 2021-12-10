<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = [
            ['title' => 'Pizza 1','path'=>'pizza-1.jpg','alt'=>'','description'=>'Pizza 1 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 2','path'=>'pizza-2.jpg','alt'=>'','description'=>'Pizza 2 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 3','path'=>'pizza-3.jpg','alt'=>'','description'=>'Pizza 3 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 4','path'=>'pizza-4.jpg','alt'=>'','description'=>'Pizza 4 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 5','path'=>'pizza-5.jpg','alt'=>'','description'=>'Pizza 5 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 6','path'=>'pizza-6.jpg','alt'=>'','description'=>'Pizza 6 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 7','path'=>'pizza-7.jpg','alt'=>'','description'=>'Pizza 7 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Pizza 8','path'=>'pizza-8.jpg','alt'=>'','description'=>'Pizza 8 Image', 'created_at' => Carbon::now()->format('Y-m-d H:i:s')],
        ];
        DB::table('images')->insert($images);
    }
}
