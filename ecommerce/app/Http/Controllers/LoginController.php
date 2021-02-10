<?php

namespace App\Http\Controllers;

use App\Models\Login;
use Illuminate\Http\Request;


class LoginController extends Controller
{

    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Login::create($request->all());
    }


    public function show(Login $login)
    {
        //
    }

    public function edit(Login $login)
    {
        //
    }

    public function update(Request $request, Login $login)
    {
        //
    }


    public function destroy(Login $login)
    {
        //
    }
}
