package com.backend.FullStackApplication.controller;

import com.backend.FullStackApplication.exception.UserNotFoundException;
import com.backend.FullStackApplication.model.User;
import com.backend.FullStackApplication.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins= "http://localhost:3000")
public class UserController {

    private final UserRepo userRepo;

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody User user){
        userRepo.save(user);
        return ResponseEntity.status(HttpStatus.CREATED)
                .header("location","/user/"+user.getId())
                .body("User Created");
    }

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUser(){
      List<User> result=userRepo.findAll();
      if(result.isEmpty()){
          return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                  .body("No user found please first insert user")
                .build();
      }else{
          return ResponseEntity.ok(result);
      }
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        Optional<User> result= userRepo.findById(id);
        if(result.isPresent()){
            return ResponseEntity.ok(result.get());
        }else{
            throw new UserNotFoundException(id);
        }
    }

    @PutMapping("/user/{id}")
    public ResponseEntity<String> updateUser(@RequestBody  User updatedUser,@PathVariable Long id){
        return userRepo.findById(id)
                .map(existingUser->{
                    existingUser.setName(updatedUser.getName());
                    existingUser.setUserName(updatedUser.getUserName());
                    existingUser.setEmail(updatedUser.getEmail());
                    userRepo.save(existingUser);
                    return ResponseEntity.ok("User Updated");
                }).orElseThrow(()->new UserNotFoundException(id));

    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id){
        return userRepo.findById(id).
                map((user)->{
                    userRepo.deleteById(user.getId());
                    return ResponseEntity.ok("User deleted at id:"+id);
                })
                .orElseThrow(()->new UserNotFoundException(id));
    }



}
