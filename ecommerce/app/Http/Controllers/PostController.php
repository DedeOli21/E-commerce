<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Contato;

class PostController extends Controller
{
    public function index()
    {

        $posts = Post::get();
        return view('admin.posts.index', compact('post'));
    
    }

    public function create()
    {
        return view('admin.posts.create');
    }
}
