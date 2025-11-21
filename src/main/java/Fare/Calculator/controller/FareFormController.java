package Fare.Calculator.controller;

import Fare.Calculator.entity.Fareform;
import Fare.Calculator.services.FareformService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173/")

@RequestMapping("/formfare")
public class FareFormController {

    @Autowired
    private FareformService fareformService;

    //api to send data
    @PostMapping("/addData")
    public ResponseEntity<?> addData(@RequestBody Fareform fareform)
    {
            Fareform addData = fareformService.saveData(fareform);
            return new ResponseEntity<>(addData, HttpStatus.OK);
    }
}
