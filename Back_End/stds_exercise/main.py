import sys
# Do not modify these lines
__winc_id__ = "8c2e6882503c4baa9ce2e050497c3f2f"
__human_name__ = "stds"

# TODO: read text from stdin D
# TODO: Filter character given as an argument from the text
# TODO: Print the result to stdout
# TODO: Print the total number of removed characters to stderr

def main():
    arg = str(sys.argv[1])
    count = 0

    input_string = sys.stdin.read()
    result = []
    for i in input_string:
        new_input = i.replace(arg, "")
        result.append(new_input)
        count += i.count(arg)

    sys.stdout.writelines(result)
    sys.stderr.write(str(count))  
        
if __name__ == "__main__":
    main()
