package com.lj.mcliu.util;

import javax.crypto.Cipher;
import javax.crypto.SecretKey;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Utility class of encryption
 */
public class EncryptUtil implements PasswordEncoder {

    private static Logger logger = LoggerFactory.getLogger(EncryptUtil.class);

    /**
     * Encryption with java.
     *
     * @param str Target value
     * @return Encrypted value
     */
    public static String encrypt(String str) {

        String encryptStr = "";
        if (str != null) {
            try {
                byte[] key = "3G1SG@^b($2lQgvP".getBytes();
                byte[] iv = "ZZ?Ag0N}TI5zQMP1".getBytes();
                SecretKey cipherKey = new SecretKeySpec(key, "AES");
                IvParameterSpec ivSpec = new IvParameterSpec(iv);
                Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
                cipher.init(Cipher.ENCRYPT_MODE, cipherKey, ivSpec);
                byte[] cipherText = cipher.doFinal(str.getBytes());
                encryptStr = asHex(cipherText);
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
        }

        return encryptStr;
    }

    private static String asHex(byte bytes[]) {
        StringBuffer strbuf = new StringBuffer(bytes.length * 2);
        for (int index = 0; index < bytes.length; index++) {
            int bt = bytes[index] & 0xff;
            if (bt < 0x10) {
                strbuf.append("0");
            }
            strbuf.append(Integer.toHexString(bt));
        }
        return strbuf.toString();
    }

    @Override
    public String encode(CharSequence arg0) {
        return null;
    }

    /**
     * Comparison of the encrypted value and string
     *
     * @param CharSequence Input value
     * @param String Value of DB
     *
     */
    @Override
    public boolean matches(CharSequence arg0, String arg1) {
        if (encrypt(arg0.toString()).equals(arg1)) {
            return true;
        }
        return false;
    }

}
