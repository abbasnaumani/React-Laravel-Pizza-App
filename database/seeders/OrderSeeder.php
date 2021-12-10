<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $orderseeder = [
            ['user_id' => 1,"address"=>'1025 NW 23th Avenue, Coconut Creek, Florida 3321, United States','phone_number'=>'5417543010','created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['user_id' => 1,"address"=>'1025 NW 23th Avenue, Coconut Creek, Florida 3321, United States','phone_number'=>'5417543010','created_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['user_id' => 2,"address"=>'1019 NW 25th Avenue, Coconut Creek, Florida 3322, United States','phone_number'=>'5557143112','created_at' => Carbon::now()->format('Y-m-d H:i:s')],
        ];
        DB::table('orders')->insert($orderseeder);
    }
}
