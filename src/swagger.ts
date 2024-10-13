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
          required: ['username', 'password', 'email'],
          properties: {
            _id: {
              type: 'string',
              description: "Teacher's unique identifier",
              example: '60d0fe4f5311236168a109ca',
            },
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
            class: {
              type: 'string',
              description: 'ID of the class assigned to the teacher',
              example: '60d0fe4f5311236168a109cb',
            },
            role: {
              type: 'string',
              description: "Teacher's role",
              default: 'teacher',
            },
          },
        },
        Student: {
          type: 'object',
          required: ['username', 'password', 'email', 'class'],
          properties: {
            _id: {
              type: 'string',
              description: "Student's unique identifier",
              example: '60d0fe4f5311236168a109cc',
            },
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
            grades: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Grade',
              },
              description: 'List of grades for the student',
            },
            class: {
              type: 'string',
              description: 'ID of the class assigned to the student',
              example: '60d0fe4f5311236168a109cb',
            },
            avg: {
              type: 'number',
              description: 'Average grade of the student',
              example: 90,
            },
            role: {
              type: 'string',
              description: "Student's role",
              default: 'student',
            },
          },
        },
        Grade: {
          type: 'object',
          properties: {
          examName: {
            type: 'string',
            description: 'Name of the exam',
            example: 'Math Exam',
          },
          score: {
            type: 'number',
            description: 'Score of the exam',
            example: 95,
            },
          },
        },
        Class: {
          type: 'object',
          required: ['name'],
          properties: {
            _id: {
              type: 'string',
              description: "Class's unique identifier",
              example: '60d0fe4f5311236168a109cb',
            },
            name: {
              type: 'string',
              description: 'Name of the class',
              example: 'Class A',
            },
            teacher: {
              type: 'string',
              description: 'ID of the teacher assigned to the class',
              example: '60d0fe4f5311236168a109ca',
            },
            students: {
              type: 'array',
              items: {
                type: 'string',
                description: 'List of student IDs assigned to the class',
              },
              description: 'List of students in the class',
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
