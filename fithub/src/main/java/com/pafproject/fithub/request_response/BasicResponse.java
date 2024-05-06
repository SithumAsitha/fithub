package com.pafproject.fithub.request_response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BasicResponse {

    private boolean status;
    private String message;
    private  Object data;

}
