<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeyUserAttedanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasTable("users")){
            Schema::table("attedance",function (Blueprint $table) {
                $table->foreign('userId')
                ->references('id')
                ->on('users');

            });
        }
        if(Schema::hasTable("cabang")){
            Schema::table("attedance",function (Blueprint $table){
                $table->foreign("cabangId")
                    ->references("id")
                    ->on("cabang");
            });
    }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
