<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['title' => 'Pizza','created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['title' => 'Beverages','created_at' => Carbon::now()->format('Y-m-d H:i:s')]
        ];
        DB::table('categories')->insert($categories);
    }
}
