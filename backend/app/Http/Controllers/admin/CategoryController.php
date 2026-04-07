<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    //This method will return all categories
    public function index()
    {
        $categories = Category::orderBy('created_at', 'DESC')->get();
        return response()->json([
            'status' => 200,
            'data' => $categories
        ]);
    }

    //This method will store category in database
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ], 400);
        }

        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status; // default to active if not provided
        $category->save();

        return response()->json([
            'status' => 200,
            "message" => "Category added successfully",
            'data' => $category
        ], 200);
    }

    //this method will return a single category
    public function show($id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $category
        ], 200);
    }

    //this method will update a single category
    public function update(Request $request, $id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 400,
                'errors' => $validator->errors(),
            ], 400);
        }

        $category->name = $request->name;
        $category->status = $request->status ?? $category->status;
        $category->save();

        return response()->json([
            'status' => 200,
            'message' => 'Category updated successfully',
            'data' => $category
        ], 200);
    }

    //this method will destroy a single category
    public function destroy($id)
    {
        $category = Category::find($id);

        if (!$category) {
            return response()->json([
                'status' => 404,
                'message' => 'Category not found'
            ], 404);
        }

        $category->delete();

        return response()->json([
            'status' => 200,
            'message' => 'Category deleted successfully'
        ], 200);
    }
}
