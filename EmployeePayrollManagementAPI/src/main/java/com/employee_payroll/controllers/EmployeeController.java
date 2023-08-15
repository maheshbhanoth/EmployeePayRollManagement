package com.employee_payroll.controllers;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.DTO.EmployeeDTO;
import com.employee_payroll.DTO.ScheduleWorkDTO;
import com.employee_payroll.Exceptions.ResourceNotfoundException;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.entities.Schedule_work;
import com.employee_payroll.repositories.EmployeeRepo;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping("/employee")
    @CrossOrigin("http://localhost:4200") //get the employee by using id
    public ResponseEntity<?> getEmployee(@RequestParam("id") int id) {
        Optional<Employee> employeeOptional = employeeRepo.findById(id);

        if (employeeOptional.isPresent()) {
            Employee employee = employeeOptional.get();
            
            // Create an EmployeeDTO instance and populate it with employee data
            EmployeeDTO employeeDTO = new EmployeeDTO();
            employeeDTO.setId(employee.getId());
            employeeDTO.setName(employee.getName());
            employeeDTO.setMail_id(employee.getMail_id());
            employeeDTO.setRole(employee.getRole());
            employeeDTO.setCategory(employee.getCategory());
            employeeDTO.setGender(employee.getGender());

            return ResponseEntity.ok(employeeDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
        }
    } 
    
    // Get all employees
    @GetMapping("/getAllemployees")
    @CrossOrigin("http://localhost:4200")
    public List<EmployeeDTO> getAllEmployees() {
    	List<Employee> employees = employeeRepo.findAll();
        List<EmployeeDTO> EmployeeDTOs = new ArrayList<>();
        //iterating over scheduled works and passing it to the dto 
        for (Employee employee : employees) {
            EmployeeDTO dto = new EmployeeDTO();
            dto.setId(employee.getId());
            dto.setName(employee.getName());
            dto.setMail_id(employee.getMail_id());
            dto.setRole(employee.getRole());
            dto.setCategory(employee.getCategory());
            dto.setGender(employee.getGender());
            EmployeeDTOs.add(dto);
        }

        return EmployeeDTOs;
    }

    // Create employee restapi
    @PostMapping("/createEmployee")
    @CrossOrigin("http://localhost:4200")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepo.save(employee);
    }
    
    @PutMapping("/employees/{id}")
    @CrossOrigin("http://localhost:4200")
    public void updateEmployee(@PathVariable int id, @RequestBody EmployeeDTO employeeDetails) {
        Optional<Employee> employee = employeeRepo.findById(id);
        
        if (employee.isPresent()) {
            Employee existingEmployee = employee.get();
            existingEmployee.setName(employeeDetails.getName());
            existingEmployee.setMail_id(employeeDetails.getMail_id());
            existingEmployee.setRole(employeeDetails.getRole());
            existingEmployee.setCategory(employeeDetails.getCategory());
            existingEmployee.setGender(employeeDetails.getGender());
            employeeRepo.save(existingEmployee);
            System.out.println(existingEmployee.toString());
            System.out.println();
        } else {
            System.out.println();
        }
    }

    @DeleteMapping("/employees/{id}")
    @CrossOrigin("http://localhost:4200")
    public void deleteEmployee(@PathVariable int id) {
        Optional<Employee> employee = employeeRepo.findById(id);
        if(employee.isPresent()) {
        	employeeRepo.deleteById(id);
        }
        System.out.println();
    }
    
 }
