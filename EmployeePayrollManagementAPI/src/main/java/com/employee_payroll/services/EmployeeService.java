package com.employee_payroll.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee_payroll.entities.Employee;
import com.employee_payroll.repositories.EmployeeRepo;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepo empRepo;
	
	public List<Employee>  getAllEmployees(){
		return empRepo.findAll();
	}
	
	public Employee getEmployeeId(int id) {
		return empRepo.findById(id).get();
	}
 	
	public void updateEmployee(int id, Employee employee) {
		Optional<Employee> details = empRepo.findById(id);
		if(details.isPresent()) {
			Employee newEmp =  details.get();
			newEmp.setName(employee.getName());
			newEmp.setMail_id(employee.getMail_id());
			newEmp.setGender(employee.getGender());
			newEmp.setRole(employee.getRole());
			newEmp.setCategory(employee.getCategory());
			empRepo.save(newEmp);
			System.out.println("Updated");
		}else {
			System.out.println("Update Not occured");
		}
	}
	
	
	public void insertEmployee(Employee employee) {
		empRepo.save(employee);
		System.out.println("Inserted Employeee");
	}
	
	public void deleteEmployee(int id) {
		empRepo.deleteById(id);
	}

	
	
	
	
}
