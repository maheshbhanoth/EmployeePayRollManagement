package com.employee_payroll.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.entities.Credentials;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.entities.Schedule_work;
import com.employee_payroll.repositories.CredentialsRepo;
import com.employee_payroll.repositories.EmployeeRepo;

@RestController
public class CredentialsController {

	@Autowired
	private CredentialsRepo credentialsRepo;
	
	@Autowired
	private EmployeeRepo employeeRepo;
	
	@PostMapping("register")
	@CrossOrigin("http://localhost:4200")
	public ResponseEntity<?> register(@RequestBody Credentials credentials){
			
		//Before assigning work check whether the employee is present or not
        Optional<Employee> employee = employeeRepo.findById(credentials.getEmployee().getId());
        if (employee.isPresent()) {
        	credentials.setEmployee(employee.get());; // Set the Employee instance
        	credentialsRepo.save(credentials);
            return ResponseEntity.status(HttpStatus.CREATED).body("Registered successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee not found, Registraion failed");
        }
	}
	@PostMapping("login") // Change the annotation to @PostMapping
	@CrossOrigin("http://localhost:4200")
	public Object login(@RequestBody Credentials credentials){
	    List<Credentials> allAccounts = credentialsRepo.findAll();
	    ResponseEntity<?> loggedIn = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Account Not Found");

	    for (Credentials accountDetails : allAccounts) {
	        if (accountDetails.getEmployee().getId() == credentials.getEmployee().getId() && // Change to getEmployee_id()
	            accountDetails.getPassword().equals(credentials.getPassword())) {
	            loggedIn = ResponseEntity.status(HttpStatus.ACCEPTED).body(accountDetails.getEmployee().getId());
	            break;  // Exit the loop when a match is found
	        }
	    }
	    return loggedIn.getBody();
	}

//	@PutMapping("/updatePassword")
//    @CrossOrigin(origins = "http://localhost:4200")//update the password method
//    public ResponseEntity<String> updatePassword(@RequestBody Credentials credentials) {
//        Credentials credential = credentialsRepo.findByEmployeeId(credentials.getEmployee().getId()).orElse(null);
//        Optional<Credentials> isAccountExisted =  credentialsRepo.findByEmployeeId(credentials.getEmployee().getId());
//        if (isAccountExisted.isPresent()) {
//        	
//            credential.setPassword(isAccountExisted.get().getPassword());
//            credentialsRepo.save(credential);
//            
//            return ResponseEntity.ok("password updated successfully");
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("account not found register please");
//        }
//    }
	
}
