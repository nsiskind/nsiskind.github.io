package handler;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.ArrayList;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBAttribute;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBHashKey;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBIgnore;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTable;



public class ClickHandler implements RequestHandler<Map<String,String>, String> {
    	
//    	AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
//
//    	DynamoDBMapper mapper = new DynamoDBMapper(client);
//    	    	
//    	String example = "example";
//    	
//    	Data click = new Data();
//    	click.setID(123);
//    	
//    	mapper.save(click);
  
	public String handleRequest(Map<String,String> input, Context ctx) {
			String output = "\n" + input.get("testQ");   	

			String size = String.format("%d", input.size());
			
    	return output + size;
    
	}
	

	
}

	


