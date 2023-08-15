package com.employee_payroll.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.DTO.SalaryDTO;
import com.employee_payroll.entities.Salary;
import com.employee_payroll.services.SalaryService;



@RestController
@CrossOrigin
public class SalaryController {
	

	@Autowired
	SalaryService salaryService;
	
	@GetMapping("/salary")
	public List<SalaryDTO> getAllSalary(){
		return salaryService.getAllSalary();
	}
	
	@GetMapping("salary/{salaryId}")
	public List<SalaryDTO> getById(@PathVariable int salaryId) {
		return salaryService.getByIdSalary(salaryId);
		
	}
	
	@GetMapping("salary/employee/{employee_id}")
	public List<SalaryDTO> getByEmployeeId(@PathVariable int employee_id) {
		return salaryService.getSalaryByEmployeeId(employee_id);
	}
	

	
	@PutMapping("salary/{salaryId}")
	public void insertByInd(@PathVariable int salaryId , @RequestBody Salary salary) {
		salaryService.updatedSalary(salaryId, salary);
	}
	
	@PostMapping("salary")
	public void updateSalary(@RequestBody Salary salary) {
		salaryService.insertSalary(salary);
	}
	
	@DeleteMapping("salary/{salaryId}")
	public void deleteByIdSalary(@PathVariable int salaryId) {
		salaryService.deleteSalary(salaryId);
	}
	
}
