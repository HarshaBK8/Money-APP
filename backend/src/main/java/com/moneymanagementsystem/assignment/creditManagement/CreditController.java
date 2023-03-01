package com.moneymanagementsystem.assignment.creditManagement;

import com.moneymanagementsystem.assignment.Debit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
//@RequestMapping("/credit")
public class CreditController {
    @Autowired
    private CreditRepository repository;
    @GetMapping("/credit")
    public List<Credit> getCreditDetails(){
        return repository.findAll();
    }
    @GetMapping("/credit/edit/{id}")
    public Credit getSingleCredit(@PathVariable int id){
        Optional<Credit> optCredit=repository.findById(id);
        return optCredit.get();
    }
    @PutMapping("/credit/edit/{id}")
    public Credit updateSingleEntry(@PathVariable int id, @RequestBody Credit body){
        Optional<Credit> optCredit=repository.findById(id);
        Credit credit = optCredit.get();

        if(!optCredit.isEmpty()) {
            credit.setAmount(body.getAmount());
            credit.setName(body.getName());
            repository.save(credit);
        }
        return credit;

    }

    @PostMapping("/credit/add")
    public Credit addNewCredit(@RequestBody Credit credit){
        return repository.save(credit);
    }
    @DeleteMapping("/credit/{id}")
    public void deleteEntry(@PathVariable int id){
        repository .deleteById(id);
    }
}
