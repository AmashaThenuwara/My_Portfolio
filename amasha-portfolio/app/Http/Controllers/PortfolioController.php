<?php

namespace App\Http\Controllers;

class PortfolioController extends Controller
{
    public function home()
    {
        return view('home');
    }

    public function toc()
    {
        return view('toc');
    }

    public function about()
    {
        return view('about');
    }

    public function skills()
    {
        return view('skills');
    }

    public function education()
    {
        return view('education');
    }

    public function projects()
    {
        return view('projects');
    }

    public function certificates()
    {
        return view('certificates');
    }

    public function contact()
    {
        return view('contact');
    }

    public function project1()
    {
        return view('projects.project1');
    }

    public function projetc2()
    {
        return view('projects.projetc2');
    }

    public function project3()
    {
        return view('projects.project3');
    }

    public function project4()
    {
        return view('projects.project4');
    }
}
