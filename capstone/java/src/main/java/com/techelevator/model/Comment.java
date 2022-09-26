package com.techelevator.model;

public class Comment {
    private int id;
    private int post_id;
    private int user_id;
    private String description;

    public Comment(){}

    public Comment(int id, int post_id, int user_id, String description) {
        this.id = id;
        this.post_id = post_id;
        this.user_id = user_id;
        this.description = description;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
