const SNIPPETS = [
    {
        id: 'javascript',
        name: 'JavaScript',
        code: `function exampleFunction() {
  const greeting = "Hello, World!";
  let counter = 0;
  
  for (let i = 0; i < 5; i++) {
    counter += i;
    console.log(\`Iteration \${i}: \${greeting}\`);
  }
  
  return \`Counter final value: \${counter}\`;
}

const result = exampleFunction();
console.log(result);`
    },
    {
        id: 'python',
        name: 'Python',
        code: `def example_function():
        greeting = "Hello, World!"
        counter = 0
        
        for i in range(5):
            counter += i
            print(f"Iteration {i}: {greeting}")
        
        return f"Counter final value: {counter}"
    
    result = example_function()
    print(result)`
    },
    {
        id: 'csharp',
        name: 'C#',
        code: `using System;

class Program
{
    static string ExampleFunction()
    {
        string greeting = "Hello, World!";
        int counter = 0;
        
        for (int i = 0; i < 5; i++)
        {
            counter += i;
            Console.WriteLine($"Iteration {i}: {greeting}");
        }
        
        return $"Counter final value: {counter}";
    }

    static void Main()
    {
        string result = ExampleFunction();
        Console.WriteLine(result);
    }
}`
    }, {
        id: 'java',
        name: 'Java',
        code: `public class ExampleProgram {
    public static String exampleFunction() {
        String greeting = "Hello, World!";
        int counter = 0;
        
        for (int i = 0; i < 5; i++) {
            counter += i;
            System.out.println("Iteration " + i + ": " + greeting);
        }
        
        return "Counter final value: " + counter;
    }

    public static void main(String[] args) {
        String result = exampleFunction();
        System.out.println(result);
    }
}`
    }, {
        id: 'dart',
        name: 'Dart',
        code: `String exampleFunction() {
      final greeting = "Hello, World!";
      var counter = 0;
      
      for (var i = 0; i < 5; i++) {
        counter += i;
        print('Iteration \${i}: \${greeting}');
      }
      
      return 'Counter final value: \${counter}';
    }
    
    void main() {
      final result = exampleFunction();
      print(result);
    }`
    }, {
        id: 'typescript',
        name: 'TypeScript',
        code: `function exampleFunction(): string {
      const greeting: string = "Hello, World!";
      let counter: number = 0;
      
      for (let i: number = 0; i < 5; i++) {
        counter += i;
        console.log(\`Iteration \${i}: \${greeting}\`);
      }
      
      return \`Counter final value: \${counter}\`;
    }
    
    const result: string = exampleFunction();
    console.log(result);`
    }, {
        id: 'rust',
        name: 'Rust',
        code: `fn example_function() -> String {
    let greeting = "Hello, World!";
    let mut counter = 0;
    
    for i in 0..5 {
        counter += i;
        println!("Iteration {}: {}", i, greeting);
    }
    
    format!("Counter final value: {}", counter)
}

fn main() {
    let result = example_function();
    println!("{}", result);
}`
    }, {
        id: 'go',
        name: 'Go',
        code: `package main

import (
    "fmt"
    "strconv"
)

func exampleFunction() string {
    greeting := "Hello, World!"
    counter := 0
    
    for i := 0; i < 5; i++ {
        counter += i
        fmt.Printf("Iteration %d: %s\\n", i, greeting)
    }
    
    return "Counter final value: " + strconv.Itoa(counter)
}

func main() {
    result := exampleFunction()
    fmt.Println(result)
}`
    },
    {
        id: 'ruby',
        name: 'Ruby',
        code: `def example_function
      greeting = "Hello, World!"
      counter = 0
      
      5.times do |i|
        counter += i
        puts "Iteration #{i}: #{greeting}"
      end
      
      "Counter final value: #{counter}"
    end
    
    result = example_function
    puts result`
    },
    {
        id: 'swift',
        name: 'Swift',
        code: `func exampleFunction() -> String {
            let greeting = "Hello, World!"
            var counter = 0
            
            for i in 0..<5 {
                counter += i
                print("Iteration \\(i): \\(greeting)")
            }
            
            return "Counter final value: \\(counter)"
        }
        
        let result = exampleFunction()
        print(result)`
    },
    {
        id: 'dart',
        name: 'Dart',
        code: `String exampleFunction() {
          final greeting = "Hello, World!";
          var counter = 0;
          
          for (var i = 0; i < 5; i++) {
            counter += i;
            print('Iteration \${i}: \${greeting}');
          }
          
          return 'Counter final value: \${counter}';
        }
        
        void main() {
          final result = exampleFunction();
          print(result);
        }`
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        code: `fun exampleFunction(): String {
            val greeting = "Hello, World!"
            var counter = 0
            
            for (i in 0 until 5) {
                counter += i
                println("Iteration \${i}: \${greeting}")
            }
            
            return "Counter final value: \${counter}"
        }
        
        fun main() {
            val result = exampleFunction()
            println(result)
        }`
    },
    {
        id: 'cpp',
        name: 'C++',
        code: `#include <iostream>
        #include <string>
        
        std::string exampleFunction() {
            std::string greeting = "Hello, World!";
            int counter = 0;
            
            for (int i = 0; i < 5; i++) {
                counter += i;
                std::cout << "Iteration " << i << ": " << greeting << std::endl;
            }
            
            return "Counter final value: " + std::to_string(counter);
        }
        
        int main() {
            std::string result = exampleFunction();
            std::cout << result << std::endl;
            return 0;
        }`
    },
    {
        id: 'php',
        name: 'PHP',
        code: `<?php
        function exampleFunction() {
            $greeting = "Hello, World!";
            $counter = 0;
            
            for ($i = 0; $i < 5; $i++) {
                $counter += $i;
                echo "Iteration {$i}: {$greeting}\\n";
            }
            
            return "Counter final value: {$counter}";
        }
        
        $result = exampleFunction();
        echo $result;
        ?>`

    }
];

export default SNIPPETS;