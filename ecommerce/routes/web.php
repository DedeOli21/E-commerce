<?php


use App\Http\Controllers\{
    PostController
};
use Illuminate\Support\Facades\Route;

Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');
Route::get('/posts', [PostController::class, 'index'])->name('posts.index');//nome da rota

Route::get('/', function () {
    return view('welcome');
});
