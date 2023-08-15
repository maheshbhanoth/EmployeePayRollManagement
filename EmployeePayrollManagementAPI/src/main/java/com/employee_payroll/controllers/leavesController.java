package com.employee_payroll.controllers;

import java.util.ArrayList;
import java.util.List;
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
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.DTO.LeavesDTO;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.entities.Leaves;
import com.employee_payroll.repositories.EmployeeRepo;
import com.employee_payroll.repositories.LeavesRepo;


@RestController
@CrossOrigin
public class leavesController {

    @Autowired
    private LeavesRepo leavesRepository;
    
    @Autowired
    private EmployeeRepo employeeRepo;

    @PostMapping("/applyLeave")//#
    public ResponseEntity<String> leaveWork(@RequestBody Leaves leave) {
        Optional<Employee> employee = employeeRepo.findById(leave.getEmployee().getId());
        if (employee.isPresent()) {
            leave.setEmployee(employee.get());
            leavesRepository.save(leave);
            return ResponseEntity.status(HttpStatus.CREATED).body("Leave scheduled successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee not found, leave not scheduled");
        }
    }

    @DeleteMapping("deleteLeave/{id}")
    public void deleteLeave(@PathVariable int id) {
    	leavesRepository.deleteById(id);
    }

    @PutMapping("updateLeave/{id}")//#
    public void updateLeave(@PathVariable  int id, @RequestBody Leaves leave) {
        Optional<Leaves> optionalLeave = leavesRepository.findById(id);
        if (optionalLeave.isPresent()) {
            Leaves l = optionalLeave.get();
            l.setLeaveType(leave.getLeaveType());
            l.setStartDate(leave.getStartDate());
            l.setEndDate(leave.getEndDate());
            l.setReason(leave.getReason());
            leavesRepository.save(l);
            System.out.println("Leave schedule updated successfully");
        } else {
        	System.out.println("Leave schedule not found");
        }
    }

    @GetMapping("/getLeaves")//#
    public List<LeavesDTO> getLeaves() {
        List<Leaves> leaveWorks = leavesRepository.findAll();
        List<LeavesDTO> leaveDTOs = new ArrayList<>();
        for (Leaves leave : leaveWorks) {
            LeavesDTO dto = new LeavesDTO();
            dto.setId(leave.getId());
            dto.setLeaveType(leave.getLeaveType());
            dto.setStartDate(leave.getStartDate());
            dto.setEndDate(leave.getEndDate());
            dto.setReason(leave.getReason());
            dto.setEmployee_id(leave.getEmployee().getId());
            leaveDTOs.add(dto);
        }
        return leaveDTOs;
    }
    
    @GetMapping("/getLeave/{id}")//#
    public LeavesDTO getLeavesById(@PathVariable int id) {
        List<Leaves> leaveWorks = leavesRepository.findAll();
        for (Leaves leave : leaveWorks) {
            if (leave.getId() == id) {
                LeavesDTO dto = new LeavesDTO();
                dto.setId(leave.getId());
                dto.setLeaveType(leave.getLeaveType());
                dto.setStartDate(leave.getStartDate());
                dto.setEndDate(leave.getEndDate());
                dto.setReason(leave.getReason());
                dto.setEmployee_id(leave.getEmployee().getId());
                return dto;
            }
        }
        return null;
    }


    @GetMapping("getLeavesofEmployee/{employeeId}")//#
    public List<LeavesDTO> getLeavesForEmployee(@PathVariable int employeeId) {
        List<Leaves> leaves = leavesRepository.findAllByEmployeeId(employeeId);
        List<LeavesDTO> leaveDTOs = new ArrayList<>();
        for (Leaves leave : leaves) {
            LeavesDTO dto = new LeavesDTO();
            dto.setId(leave.getId());
            dto.setLeaveType(leave.getLeaveType());
            dto.setStartDate(leave.getStartDate());
            dto.setEndDate(leave.getEndDate());
            dto.setReason(leave.getReason());
            dto.setEmployee_id(leave.getEmployee().getId());
            leaveDTOs.add(dto);
        }
        return leaveDTOs;
    }
}