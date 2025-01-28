import java.io.*;
import java.util.*;

public class LogFileProcessor {
    public static void main(String[] args) {
        try {
            // Reading the file
            BufferedReader br = new BufferedReader(new FileReader("log.txt"));
            String line;
            List<String> splitContent = new ArrayList<>();
            while ((line = br.readLine()) != null) {
                splitContent.add(line);
            }
            br.close();

            // Creating the list of hosts
            List<String> hostList = new ArrayList<>();
            for (int i = 0; i < splitContent.size(); i += 2) {
                String host = splitContent.get(i).split("- -")[0].trim();
                hostList.add(host);
            }

            // Getting unique hosts
            Set<String> uniqueHosts = new HashSet<>(hostList);

            // Preparing output list
            List<String> outputList = new ArrayList<>();
            for (String item : uniqueHosts) {
                int count = Collections.frequency(hostList, item);
                outputList.add(item + " " + count);
            }

            // Writing the output to a file
            BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
            for (String item : outputList) {
                bw.write(item);
                bw.newLine();
            }
            bw.close();

            // Reading and printing the output file content
            BufferedReader fileOutput = new BufferedReader(new FileReader("output.txt"));
            String outputLine;
            while ((outputLine = fileOutput.readLine()) != null) {
                System.out.println(outputLine);
            }
            fileOutput.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}


