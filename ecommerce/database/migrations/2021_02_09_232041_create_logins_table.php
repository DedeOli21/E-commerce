<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoginsTable extends Migration
{
   
    public function up()
    {
        Schema::create('logins', function (Blueprint $table) {
            $table->id();
            $table->string('email', 25);
            $table->string('nome', 30);
            $table->string('senha', 30);
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('logins');
    }
}
