#include <iostream>
#include <string>
#include <vector>
#include <sstream>

// Function to tokenize a string based on spaces
std::vector<std::string> tokenize(const std::string& input) {
    std::istringstream iss(input);
    std::vector<std::string> tokens;
    std::string token;
    while (iss >> token) {
        tokens.push_back(token);
    }
    return tokens;
}

// Function to check if a string is a valid identifier
bool isValidIdentifier(const std::string& token) {
    // A simple check: if the token starts with a letter or underscore, it's considered valid
    char firstChar = token[0];
    return (isalpha(firstChar) || firstChar == '_');
}

// Function to display lexemes
void displayLexemes(const std::vector<std::string>& tokens) {
    std::cout << "Lexemes entered:" << std::endl;
    for (const auto& token : tokens) {
        std::cout << token << std::endl;
    }
}

int main() {
    std::string input;
    std::cout << "Enter the line of code: ";
    std::getline(std::cin, input);

    // Tokenize the input string
    std::vector<std::string> tokens = tokenize(input);

    // Display lexemes
    displayLexemes(tokens);

    // Additional checks can be added here, like checking if each lexeme is a valid identifier

    return 0;
}
