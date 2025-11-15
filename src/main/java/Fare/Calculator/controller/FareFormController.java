package Fare.Calculator.controller;

import Fare.Calculator.entity.Fareform;
import Fare.Calculator.services.FareformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/formfare")
public class FareFormController {

    @Autowired
    private FareformService fareformService;

    //api to send data
    @PostMapping("/addData")
    public ResponseEntity<?> addData(@RequestBody Fareform fareform)
    {
        if (fareform != null) {
            Fareform addData = fareformService.saveData(fareform);
            return new ResponseEntity<>(addData, HttpStatus.OK);
        }
    else
        return new ResponseEntity<>("data is null" , HttpStatus.NOT_FOUND);
    }
}
