import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'School Management API',
      version: '1.0.0',
      description: 'API for managing teachers, students, and classes in a school',
    },
    servers: [
      {
        url: 'http://localhost:3005',
      },
    ],
    components: {
      schemas: {
        Teacher: {
          type: 'object',
          required: ['username', 'password', 'email', 'className'], 
          properties: {
            username: {
              type: 'string',
              description: "Teacher's username",
              example: 'teacher_123',
            },
            password: {
              type: 'string',
              description: "Teacher's password",
              example: 'password123',
            },
            email: {
              type: 'string',
              description: "Teacher's email",
              example: 'teacher@example.com',
            },
            className: {
              type: 'string',
              description: 'Name of the class',
              example: 'my-class',
            },
          },
        },
        Student: {
          type: 'object',
          required: ['username', 'password', 'email', 'className'],
          properties: {
            username: {
              type: 'string',
              description: "Student's username",
              example: 'student_456',
            },
            password: {
              type: 'string',
              description: "Student's password",
              example: 'password456',
            },
            email: {
              type: 'string',
              description: "Student's email",
              example: 'student@example.com',
            },
            className: {
              type: 'string',
              description: 'ID of the class assigned to the student',
              example: 'my-class',
            },
          },
        },
      LoginRequest: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: {
            type: 'string',
            description: 'Username for login',
            example: 'john_doe',
          },
          password: {
            type: 'string',
            description: 'Password for login',
            example: 'password123',
          },
        },
      },
    LoginResponse: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          description: 'JWT token for authentication',
          example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

export { 
  swaggerUi, 
  swaggerDocs 
};
