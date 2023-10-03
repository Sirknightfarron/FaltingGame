import javax.naming.OperationNotSupportedException;

import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.core.Response.Status;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class ExceptionHandler implements ExceptionMapper<OperationNotSupportedException> {

    @Override
    public Response toResponse(OperationNotSupportedException exception) {
        return Response.status(Status.BAD_REQUEST).entity(exception.getMessage()).build();
    }

}