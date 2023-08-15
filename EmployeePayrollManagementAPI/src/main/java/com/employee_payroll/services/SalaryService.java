package com.employee_payroll.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee_payroll.DTO.SalaryDTO;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.entities.Salary;
import com.employee_payroll.repositories.SalaryRepository;

@Service
public class SalaryService {
	
	@Autowired
	SalaryRepository salaryRepository;
	
	@Autowired
	EmployeeService employeeService;
	
	
//	public List<Salary> getAllSalary(){
//		return salaryRepository.findAll();
//	}
	
	public List<SalaryDTO> getAllSalary(){
		List<Salary> salaries = salaryRepository.findAll();
        List<SalaryDTO> salaryDTOs = new ArrayList<>();
        //iterating over scheduled works and passing it to the dto 
        for (Salary salary : salaries) {
            SalaryDTO dto = new SalaryDTO();
            dto.setId(salary.getId());
            dto.setSalary_credited_date(salary.getSalary_credited_date());
            dto.setAmount(salary.getAmount());
            dto.setEmployee_id(salary.getEmployee().getId());
            
            salaryDTOs.add(dto);
        }

        return salaryDTOs;
	}
	
	public List<SalaryDTO> getByIdSalary(int salaryId) {
		
		Optional<Salary> salary =  salaryRepository.findById(salaryId);
        List<SalaryDTO> salaryDTOs = new ArrayList<>();
        
        if(salary.isPresent()) {
            SalaryDTO dto = new SalaryDTO();
            dto.setId(salary.get().getId());
            dto.setSalary_credited_date(salary.get().getSalary_credited_date());
            dto.setAmount(salary.get().getAmount());
            dto.setEmployee_id(salary.get().getEmployee().getId());
        
            salaryDTOs.add(dto);
        }
            return salaryDTOs;
	}
	
	
	public void insertSalary(Salary salary) {
	    Employee employee = employeeService.getEmployeeId(salary.getEmployee().getId());

	    if (employee != null) {
	        salary.setEmployee(employee);  
	        salaryRepository.save(salary);
	    } else {
	        
	    }
	}
	
	
	public void updatedSalary(int id,Salary salary) {
	Optional<Salary> current_salary = salaryRepository.findById(id);
	    if(current_salary.isPresent()) {
	    	Salary newSalary =  current_salary.get();
	    	newSalary.setAmount(salary.getAmount());
	    	newSalary.setSalary_credited_date(salary.getSalary_credited_date());
	    	newSalary.setEmployee(salary.getEmployee());
	    	salaryRepository.save(newSalary);
	    }
	}
	

	

	
	public void deleteSalary(int salaryId) {
		salaryRepository.deleteById(salaryId);
	}
	

//    public List<Salary> getSalaryByEmployeeId(int employeeId) {
//        return salaryRepository.findByEmployee_Id(employeeId);
//    }
	
	public List<SalaryDTO> getSalaryByEmployeeId(int employeeId) {
		
		List<Salary> salaries = salaryRepository.findByEmployee_Id(employeeId);
        List<SalaryDTO> salaryDTOs = new ArrayList<>();
        //iterating over scheduled works and passing it to the dto 
        for (Salary salary : salaries) {
            SalaryDTO dto = new SalaryDTO();
            dto.setId(salary.getId());
            dto.setSalary_credited_date(salary.getSalary_credited_date());
            dto.setAmount(salary.getAmount());
            dto.setEmployee_id(salary.getEmployee().getId());
            
            salaryDTOs.add(dto);
        }

        return salaryDTOs;
  }
	

}
