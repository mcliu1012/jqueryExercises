package com.mcliu.jqueryExercises.util;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.tools.zip.ZipEntry;
import org.apache.tools.zip.ZipOutputStream;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.multipart.MultipartFile;

@Configuration
public class CommonUtil {

    /** ロガー */
    private static final Logger logger = LoggerFactory.getLogger(CommonUtil.class);

    /**
     * エラーログを出力
     *
     * @param result
     */
    public void outputError(BindingResult result) {
        for (FieldError error : result.getFieldErrors()) {
            logger.info(error.getField() + "[" + error.getRejectedValue() + " ]:" + error.getDefaultMessage());
        }
    }

    /**
     * 拡張子からcontentTypeを返す
     *
     * @param extension
     * @return
     */
    public static String getContentType(String extension) {
        String contentType = "";
        if (extension != null) {
            if (extension.equals("jpg")) {
                contentType = "image/jpeg";
            } else if (extension.equals("wmv")) {
                contentType = "video/x-ms-wmv";
            }
        }
        return contentType;
    }

    /**
     * ファイルのディレクトリがない場合は作成する
     *
     * @param filedir
     * @return
     */
    public static File makeDir(File filedir) {
        File dir = filedir.getParentFile();
        if (!dir.exists()) {
            dir.mkdirs();
        }

        return filedir;
    }

    /**
     * ファイルアップロード
     *
     * @param dir
     * @param file
     * @param filename
     * @param filetype
     * @throws Exception
     */
    public static void fileUpload(String dir, MultipartFile file, int filename, String filetype) throws Exception {
        byte[] byteArray = file.getBytes();
        String filedir = dir + "/" + filename + "." + filetype;
        try {
            FileUtils.writeByteArrayToFile(makeDir(new File(filedir)), byteArray);
            logger.info("ファイルをアップロードしました。[" + filedir + "]");
        } catch (Exception e) {
            logger.warn("ファイルをできませんでした。[" + filedir + "]", e);
            throw e;
        }
    }

    /**
     * 画像、動画データ取得
     *
     * @param dir
     * @param imgPath
     * @param response
     * @param errorImgPath
     * @throws Exception
     */
    public static void viewImg(String dir, String imgPath, HttpServletResponse response, String errorImgPath)
            throws Exception {
        BufferedInputStream in = null;
        ServletOutputStream out = null;
        String contentType = "";

        String filepath = dir + "/" + imgPath;
        URL notFoundFilePath = null;

        try {
            if (imgPath == null || imgPath.length() == 0) {
                logger.warn("不明なファイルです。" + imgPath);
                throw new FileNotFoundException();
            }
            // 拡張子
            String extension = imgPath.substring(imgPath.indexOf(".") + 1);
            if (extension == null || imgPath.length() == 0) {
                logger.warn("不明な拡張子です。" + imgPath);
                throw new FileNotFoundException();
            }
            // コンテンツタイプ
            contentType = getContentType(extension);
            if (contentType.equals("")) {
                logger.warn("不明なコンテンツタイプです。" + imgPath);
                throw new FileNotFoundException();
            }
            // ファイル
            if (!new File(filepath).exists()) {
                logger.warn("不明なファイルです。" + imgPath);
                throw new FileNotFoundException();
            }

        } catch (FileNotFoundException e) {
            logger.warn(" 素材:" + imgPath + "ファイルがみつかりません。path:" + dir+ "/" + imgPath, e);
            // ファイルが存在しないため、代替ファイルを表示する
            notFoundFilePath = getNotFoundImgPath(errorImgPath);
            contentType = getContentType("jpg");
        }

        try {
            // ヘッダセット
            response.setHeader("Content-Type", contentType);
            out = response.getOutputStream();

            if (notFoundFilePath != null) {
                in = new BufferedInputStream(notFoundFilePath.openStream());
            } else {
                File mateFile = new File(filepath);
                in = new BufferedInputStream(new FileInputStream(mateFile));
            }

            // 読み込み
            for (int len = 0; (len = in.read()) != -1;) {
                try {
                    out.write(len);
                } catch (IOException e) {
                    // ClientAbortExceptionが起きても特に問題なし。
                    logger.warn("ファイルの読み込みがキャンセルされました。", e);
                    break;
                }

            }

        } catch (Exception e) {
            logger.warn("エラーが発生しました。  "

            + " 素材:" + imgPath + " " + e.getClass().getName() + ": " + e.getMessage(), e);
        } finally {

            if (in != null) {
                try {
                    in.close();
                } catch (IOException ex) {
                    logger.error(ex.getMessage(), ex);
                }
            }
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }
    }

    /**
     * 画像、動画データ取得
     *
     * @param dir
     * @param imgPath
     * @param response
     * @param errorImgPath
     * @throws Exception
     */
    public static void viewPureImg(String dir, String imgPath, HttpServletResponse response, String errorImgPath)
            throws Exception {
        BufferedInputStream in = null;
        ServletOutputStream out = null;
        String contentType = "";

        String filepath = dir + "/" + imgPath;
        URL notFoundFilePath = null;

        try {
            if (imgPath == null || imgPath.length() == 0) {
                logger.warn("不明なファイルです。" + imgPath);
                throw new FileNotFoundException();
            }
            // 拡張子
            String extension = imgPath.substring(imgPath.indexOf(".") + 1);
            if (extension == null || imgPath.length() == 0) {
                logger.warn("不明な拡張子です。" + imgPath);
                throw new FileNotFoundException();
            }
            // ファイル
            if (!new File(filepath).exists()) {
                logger.warn("不明なファイルです。" + imgPath);
                throw new FileNotFoundException();
            }

        } catch (FileNotFoundException e) {
            logger.warn(" 素材:" + imgPath + "ファイルがみつかりません。path:" + dir+ "/" + imgPath, e);
            // ファイルが存在しないため、代替ファイルを表示する
            notFoundFilePath = getNotFoundImgPath(errorImgPath);
            contentType = getContentType("jpg");
        }

        try {
            // ヘッダセット
            response.setHeader("Content-Type", contentType);
            out = response.getOutputStream();

            if (notFoundFilePath != null) {
                in = new BufferedInputStream(notFoundFilePath.openStream());
            } else {
                File mateFile = new File(filepath);
                in = new BufferedInputStream(new FileInputStream(mateFile));
            }

            // 読み込み
            for (int len = 0; (len = in.read()) != -1;) {
                try {
                    out.write(len);
                } catch (IOException e) {
                    // ClientAbortExceptionが起きても特に問題なし。
                    logger.warn("ファイルの読み込みがキャンセルされました。", e);
                    break;
                }

            }

        } catch (Exception e) {
            logger.warn("エラーが発生しました。  "

            + " 素材:" + imgPath + " " + e.getClass().getName() + ": " + e.getMessage(), e);
        } finally {

            if (in != null) {
                try {
                    in.close();
                } catch (IOException ex) {
                    logger.error(ex.getMessage(), ex);
                }
            }
            if (out != null) {
                try {
                    out.close();
                } catch (IOException e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }
    }

    /**
     * 代替画像のパスを返却
     *
     * @param imgpath
     * @return
     */
    public static URL getNotFoundImgPath(String imgpath) {
        // 代替画像
        Class c = CommonUtil.class;
        URL url = c.getResource("../../../../../../" + imgpath);
        // String path =
        // getClass().getClassLoader().getResource("/digitalSignage/resources/img/common/errorImg.png").toString();
        logger.info("代替え画像パス:" + url.toString());
        return url;
    }

    /**
     * 編集ロックフラグを判定
     *
     * @param lockFlagValue
     * @return
     */
    public boolean isLockFlag(Object lockFlagValue) {
        boolean lockFlag = false;
        if (lockFlagValue != null) {
            // 紐付くデータは編集できない
            if (((String) lockFlagValue).equals("open")) {
                lockFlag = true;
            } else {
                // 削除されたデータは表示しない
                lockFlag = false;
            }
        } else {
            // 紐付いていないデータ
            lockFlag = false;
        }

        return lockFlag;
    }

    /**
     * バイト配列をStringに変換（DBのblob系カラム取得用）
     *
     * @param byteArray
     * @return
     */
    public static String byteToString(byte[] byteArray) {
        String str = "";

        if (byteArray == null) {
            return null;
        }

        try {
            str = new String(byteArray, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            logger.error(e.getMessage(), e);
        }

        return str;
    }

    /**
     * セッションID照合処理
     *
     * @param session
     * @param cookies
     * @return
     */
    public static boolean sessionIdCheck(HttpSession session, Cookie[] cookies) {
        // セッションスコープ内に保持されているセッションID取得
        String sessionId = session.getId();

        // Cookie内に保持されているセッションID取得
        String cookieSessionId = null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("JSESSIONID")) {
                cookieSessionId = cookie.getValue();
                break;
            }
        }

        if (sessionId.equals(cookieSessionId)) {
            // 照合OK
            return true;
        } else {
            // 照合NG
            return false;
        }
    }

    /**
     * 文字列前後スペース(半角,全角)トリム処理
     * @param str
     * @return
     */
    public static String trimSpace(String str) {

        // 文字列をchar配列に変換
        char[] charArray = str.toCharArray();

        // 配列先頭からスペースの置換処理
        for (int i = 0; i < charArray.length; i++) {
            if (charArray[i] == ' ' || charArray[i] == '　') {
                charArray[i] = ' ';
            } else {
                break;
            }
        }

        // 配列先頭からスペースの置換処理
        for (int i = charArray.length - 1; i >= 0; i--) {
            if (charArray[i] == ' ' || charArray[i] == '　') {
                charArray[i] = ' ';
            } else {
                break;
            }
        }
        //先頭と最後から半角スペースを除去
        return String.valueOf(charArray).trim();
    }

    /**
     * ファイル作成
     *
     * @param path
     * @throws IOException
     */
    public static File createFile(String path) throws IOException {
        File file = new File(path);

        File parentFile = file.getParentFile();
        if (!parentFile.exists()) {
            parentFile.mkdirs();
        }

        if (!file.exists()) {
            file.createNewFile();
        }
        return file;
    }

    /**
     * ファイル圧縮
     *
     * @param directoryPath 圧縮するファイル
     * @param zipPath  圧縮後の出力ファイル名をフルパスで指定
     * @throws IOException
     */
    public static void createZip(String directoryPath, String zipPath) throws IOException {
        File[] files = new File(directoryPath).listFiles();

        ZipOutputStream zos = null;
        try {
            zos = new ZipOutputStream(new BufferedOutputStream(new FileOutputStream(new File(zipPath))));

            // 文字コードを指定
            zos.setEncoding("Shift_JIS");
            createZip(zos, files);
        } finally {
            IOUtils.closeQuietly(zos);
        }
    }

    /**
     * 外部プロパティーファイルを取得する
     *
     * @param key
     * @return value
     * @throws Exception
     */
    public static String getSystemProperty(String key) throws Exception {

        String value = null;

        try {
            Properties p = PropertiesLoaderUtils.loadAllProperties("digitalSignage.properties");

            String propertiesPath = p.getProperty("digitalSignage.properties.path");

            Properties prop = new Properties();
            FileInputStream stream = new FileInputStream(ResourceUtils.getFile(propertiesPath));

            prop.loadFromXML(stream);
            stream.close();

            value = prop.getProperty(key);

            if (value == null) {
                throw new Exception("外部プロパティーファイル - キー : " + key + "が存在しません");
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            throw new Exception("外部プロパティーファイルが存在しません");
        }

        return value;
    }

    /**
     * ファイル圧縮
     *
     * @param zos 圧縮後ファイル
     * @param files 圧縮するファイルリスト
     * @throws IOException
     */
    private static void createZip(ZipOutputStream zos, File[] files) throws IOException {
        InputStream is = null;
        // 読み込みバッファ
        byte[] buffer = new byte[1024];

        try {
            for (File file : files) {

                // ZIPエントリ作成
                ZipEntry entry = new ZipEntry(file.getName());
                zos.putNextEntry(entry);

                // 圧縮ファイル読み込みストリーム取得
                is = new BufferedInputStream(new FileInputStream(file));

                // 圧縮ファイルをZIPファイルに出力
                int readSize = 0;
                while ((readSize = is.read(buffer)) != -1) {
                    zos.write(buffer, 0, readSize);
                }
                // クローズ処理
                is.close();
            }
        } finally {
            zos.closeEntry();
            IOUtils.closeQuietly(is);
            zos.finish();
            IOUtils.closeQuietly(zos);
        }
    }

    public static int[] stringArrToIntArr(String[] arr) {
        int[] ret = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            ret[i] = Integer.parseInt(arr[i]);
        }
        return ret;
    }

    public static List<Integer> intArrToList(int[] arr) {
        Integer[]  integerArr = ArrayUtils.toObject(arr);
        return Arrays.asList(integerArr);
    }

    /**
     * listをStringへ変換
     * @param list
     * @return
     */
    public static String listToStirng (List<String> list) {
        return StringUtils.join(list, ",");
    }

    /**
     * 指定文字で文字列を分割
     *
     * @param Value
     * @return
     */
    public static String[] splitStrValue(String Value, String word) {
        return Value.split(word);
    }

    /**
     * [/]を[-]で置換
     *
     * @param dateValue
     * @return
     */
    public static String replaceStringToDate(String dateValue) {
        return dateValue.replace("/", "-");
    }

    /**
     * [-]を[/]で置換
     *
     * @param dateValue
     * @return
     */
    public static String replaceDateToString(String dateValue) {
        return dateValue.replace("-", "/");
    }

    /**
     * 重複なエレメントを削除する
     * @param sourceList
     * @return
     */
    public static void dropDupulicatedElement(List<String> sourceList) {
        List<String> resultList = new ArrayList<String>();
        HashSet<String> hs = new HashSet<String>();
        for (String oneItem : sourceList) {
            if (hs.add(oneItem)) {
                resultList.add(oneItem);
            }
        }
        sourceList = resultList;
    }

}
