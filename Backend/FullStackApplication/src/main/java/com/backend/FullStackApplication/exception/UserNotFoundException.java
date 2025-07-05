package com.backend.FullStackApplication.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){

        super("User not found at id: "+id);
    }

}
