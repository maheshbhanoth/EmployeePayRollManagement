package com.employee_payroll.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.DTO.ScheduleWorkDTO;
import com.employee_payroll.Exceptions.CustomException;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.entities.Schedule_work;
import com.employee_payroll.repositories.EmployeeRepo;
import com.employee_payroll.repositories.Schedule_workRepo;

@RestController
public class Schedule_work_controller {

    @Autowired
    private Schedule_workRepo scheduleWorkRepo;
    
    @Autowired
    private EmployeeRepo employeeRepo;
    
    @PostMapping("/assignWork")
    @CrossOrigin(origins = "http://localhost:4200")//add work to employee
    public ResponseEntity<String> scheduleWork(@RequestBody Schedule_work scheduleWork) {
    	//Before assigning work check whether the employee is present or not
        Optional<Employee> employee = employeeRepo.findById(scheduleWork.getEmployee().getId());
        if (employee.isPresent()) {
            scheduleWork.setEmployee(employee.get()); // Set the Employee instance
            scheduleWorkRepo.save(scheduleWork);
            return ResponseEntity.status(HttpStatus.CREATED).body("Work schedule assigned successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee not found, work schedule not assigned");
        }
    }

    @DeleteMapping("/deleteWork")
    @CrossOrigin(origins = "http://localhost:4200")//delete work using id
    public ResponseEntity<String> deleteWork(@RequestParam("id") int id) {
    	Optional<Schedule_work> scheduleWork = scheduleWorkRepo.findById(id);
    	if(scheduleWork.isPresent()) {
	        scheduleWorkRepo.deleteById(id);
	        return ResponseEntity.ok("Work schedule deleted successfully");
    	}
    	else {
    		  throw new CustomException("Scheduled work id not found");
    	}
    }

    @PutMapping("/updateWork")
    @CrossOrigin(origins = "http://localhost:4200")//update the work method
    public ResponseEntity<String> updateWork(@RequestParam("id") int id, @RequestBody Schedule_work UpdatedScheduleWork) {
        Schedule_work existingWork = scheduleWorkRepo.findById(id).orElse(null);
        if (existingWork != null) {
        	//get the updated work and pass it to setter methods of existing work
            existingWork.setDate_assigned(UpdatedScheduleWork.getDate_assigned());
            existingWork.setIs_work_assigned(UpdatedScheduleWork.getIs_work_assigned());
            existingWork.setWork_description(UpdatedScheduleWork.getWork_description());
            
            scheduleWorkRepo.save(existingWork);
            
            return ResponseEntity.ok("Work schedule updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Work schedule not found");
        }
    }
    
    @GetMapping("scheduledWorks")
    @CrossOrigin(origins = "http://localhost:4200")
    //getting a list of all scheduled works
    public List<ScheduleWorkDTO> getScheduled() {
        List<Schedule_work> scheduleWorks = scheduleWorkRepo.findAll();
        List<ScheduleWorkDTO> scheduleWorkDTOs = new ArrayList<>();
        //iterating over scheduled works and passing it to the dto 
        for (Schedule_work scheduleWork : scheduleWorks) {
            ScheduleWorkDTO dto = new ScheduleWorkDTO();
            dto.setId(scheduleWork.getId());
            dto.setDate_assigned(scheduleWork.getDate_assigned());
            dto.setIs_work_assigned(scheduleWork.getIs_work_assigned());
            dto.setWork_description(scheduleWork.getWork_description());
            dto.setEmployee_id(scheduleWork.getEmployee().getId());
            scheduleWorkDTOs.add(dto);
        }

        return scheduleWorkDTOs;
    }

    @GetMapping("getWorksOfSpecificEmployee")
    @CrossOrigin("http://localhost:4200")
    public List<ScheduleWorkDTO> getScheduleWorksForEmployee(@RequestParam("id") int employeeId) {
    	List<Schedule_work> scheduleWorks = scheduleWorkRepo.findAllByEmployeeId(employeeId);
        List<ScheduleWorkDTO> scheduleWorkDTOs = new ArrayList<>();
        //iterating over scheduled works and passing it to the dto 
        for (Schedule_work scheduleWork : scheduleWorks) {
            ScheduleWorkDTO dto = new ScheduleWorkDTO();
            dto.setId(scheduleWork.getId());
            dto.setDate_assigned(scheduleWork.getDate_assigned());
            dto.setIs_work_assigned(scheduleWork.getIs_work_assigned());
            dto.setWork_description(scheduleWork.getWork_description());
            dto.setEmployee_id(scheduleWork.getEmployee().getId());
            scheduleWorkDTOs.add(dto);
        }

        return scheduleWorkDTOs;
    }
    
}
