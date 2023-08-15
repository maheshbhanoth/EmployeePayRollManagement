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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employee_payroll.DTO.AttendanceDTO;
import com.employee_payroll.entities.Attendance;
import com.employee_payroll.entities.Employee;
import com.employee_payroll.repositories.AttendanceRepository;
import com.employee_payroll.repositories.EmployeeRepo;


@RestController
@CrossOrigin
public class AttendanceController {
	
	@Autowired
	private AttendanceRepository attendanceRepository;
	
	@Autowired
	private EmployeeRepo employeeRepository;
	
	@PostMapping("/markAttendance")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<String> markAttendance(@RequestBody Attendance markAttendance) {
		
		Optional<Employee> employee = employeeRepository.findById(markAttendance.getEmployee().getId());
		
		if(employee.isPresent()){
			
			markAttendance.setEmployee(employee.get());
			attendanceRepository.save(markAttendance);
			return ResponseEntity.status(HttpStatus.CREATED).body("Attendance Marked ");
			
		}
		
		else {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee not found ");
			
		}
		
	}
	
	@DeleteMapping("deleteAttendance")
	@CrossOrigin(origins = "http://localhost:4200")
	public ResponseEntity<String> deleteattendance(@RequestParam("id") int id) {
		Optional<Attendance> deleteAttendance = attendanceRepository.findById(id);

		if (deleteAttendance.isPresent()) {

			attendanceRepository.deleteById(id);
			
			return ResponseEntity.ok("Attendance deleted successfully"); 

		} else {
			
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Employee not found ");
		}
	}
	
	

    @PutMapping("/updateAttendance")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> updateAttendance(@RequestParam int id, @RequestBody Attendance updateAttendance) {
    	
        Attendance alreadyMarked = attendanceRepository.findById(id).orElse(null);
        
        if (alreadyMarked != null) {

        	alreadyMarked.setDate(updateAttendance.getDate());
        	alreadyMarked.setCheck_in(updateAttendance.getCheck_in());
        	alreadyMarked.setCheck_out(updateAttendance.getCheck_out());
        	alreadyMarked.setStatus(updateAttendance.getStatus());
            
            attendanceRepository.save(alreadyMarked);
            
            return ResponseEntity.ok("Attendance updated successfully");
            
        } 
        
        else {
        	
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Attendance not marked yet ");
        }
    }
    
    @GetMapping("getmarkedAttendances")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<AttendanceDTO> getMarkedAttendances() {
        List<Attendance> scheduleWorks = attendanceRepository.findAll();
        List<AttendanceDTO> scheduleWorkDTOs = new ArrayList<>();

        for (Attendance scheduleWork : scheduleWorks) {
        	AttendanceDTO dto = new AttendanceDTO();
            dto.setId(scheduleWork.getId());
            dto.setDate(scheduleWork.getDate());
            dto.setCheck_in(scheduleWork.getCheck_in());
            dto.setCheck_out(scheduleWork.getCheck_out());
            dto.setStatus(scheduleWork.getStatus());
            dto.setEmployee_id(scheduleWork.getEmployee().getId());
            scheduleWorkDTOs.add(dto);
        }

        return scheduleWorkDTOs;
    }
    
    @GetMapping("getAttendanceOfSpecificEmployee")
    @CrossOrigin("http://localhost:4200")
    public List<AttendanceDTO> getMarkedAttendancesForEmployee(@RequestParam("id") int employeeId) {
    	List<Attendance> attendences = attendanceRepository.findAllByEmployeeId(employeeId);
        List<AttendanceDTO> attendenceDTO = new ArrayList<>();

        for (Attendance attendence : attendences) {
        	AttendanceDTO dto = new AttendanceDTO();
            dto.setId(attendence.getId());
            dto.setDate(attendence.getDate());
            dto.setCheck_in(attendence.getCheck_in());
            dto.setCheck_out(attendence.getCheck_out());
            dto.setStatus(attendence.getStatus());
            dto.setEmployee_id(attendence.getEmployee().getId());
            attendenceDTO.add(dto);
        }

        return attendenceDTO;
    }
    
    
   
}