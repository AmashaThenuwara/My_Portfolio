<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

//nav bar
Route::get('/', [PortfolioController::class, 'home']);

Route::get('/toc', [PortfolioController::class, 'toc']);

Route::get('/about', [PortfolioController::class, 'about']);

Route::get('/skills', [PortfolioController::class, 'skills']);

Route::get('/education', [PortfolioController::class, 'education']);

Route::get('/projects', [PortfolioController::class, 'projects']);

Route::get('/certificates', [PortfolioController::class, 'certificates']);

Route::get('/contact', [PortfolioController::class, 'contact']);

//projetcs
Route::get('/projects/project1', [PortfolioController::class, 'project1']);

Route::get('/projects/project2', [PortfolioController::class, 'project2']);

Route::get('/projects/project3', [PortfolioController::class, 'project3']);

Route::get('/projects/project4', [PortfolioController::class, 'project4']);
