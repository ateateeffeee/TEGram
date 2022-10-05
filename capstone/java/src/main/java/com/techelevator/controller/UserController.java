package com.techelevator.controller;

import com.techelevator.dao.UserDao;
import com.techelevator.model.UpdateUser;
import com.techelevator.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
@CrossOrigin
@PreAuthorize("isAuthenticated()")
public class UserController {
    @Autowired
    private UserDao userDao;

    @PutMapping(path = "/user")
    public void updateUser(@RequestBody UpdateUser user, Principal principal)  {
        User loggedInUser = userDao.findByUsername(principal.getName());
        userDao.updateUserById(loggedInUser.getId(), user.getUsername(), user.getPassword(), user.getEmail(),user.getPicture());
    }
}
