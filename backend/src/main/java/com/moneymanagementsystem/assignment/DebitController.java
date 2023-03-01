package com.moneymanagementsystem.assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DebitController {
    @Autowired
    private DebitRepository repo;

//    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/debit")
    public List<Debit> getDebitDetails(){
        return repo.findAll();
    }
    @GetMapping("/debit/edit/{id}")
    public ResponseEntity<Debit> getSingleDebitDetails(@PathVariable int id){
        Debit debit = repo.findById(id);
        return ResponseEntity.ok(debit);
    }
//    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/debit/add")
    public Debit addNewDebit(@RequestBody Debit debit){
        return repo.save(debit);
    }
    @PutMapping("/debit/edit/{id}")
    public Debit updateSingleEntry(@PathVariable int id,@RequestBody Debit body){
        Debit debit=repo.findById(id);
        debit.setAmount(body.getAmount());
        debit.setName(body.getName());
        repo.save(debit);
        return debit;
    }
    @DeleteMapping("/debit/{id}")
    public void deleteEntry(@PathVariable int id){
        repo.deleteById(id);
    }
}
