import java.util.Scanner;

public class VernamCipher {
    public static String encrypt(String plainText, String key) {
        StringBuilder cipherText = new StringBuilder();
        for (int i = 0; i < plainText.length(); i++) {
            char encryptedChar = (char) (plainText.charAt(i) ^ key.charAt(i));
            cipherText.append(encryptedChar);
        }
        return cipherText.toString();
    }

    public static String decrypt(String cipherText, String key) {
        StringBuilder plainText = new StringBuilder();
        for (int i = 0; i < cipherText.length(); i++) {
            char decryptedChar = (char) (cipherText.charAt(i) ^ key.charAt(i));
            plainText.append(decryptedChar);
        }
        return plainText.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter plaintext: ");
        String plainText = scanner.nextLine();
        System.out.print("Enter key (same length as plaintext): ");
        String key = scanner.nextLine();
        if (plainText.length() != key.length()) {
            System.out.println("Key length must be equal to plaintext length.");
            return;
        }
        String cipherText = encrypt(plainText, key);
        System.out.println("Encrypted Text: " + cipherText);
        String decryptedText = decrypt(cipherText, key);
        System.out.println("Decrypted Text: " + decryptedText);
        scanner.close();
    }
}