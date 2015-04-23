package com.lj.mcliu.util.address;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import net.sf.json.JSONObject;

/**
 * 根据输入的IP查询详细地址
 * @author liu_jia
 *
 */
public class IpAddress {
    /**
     * @param IP
     * @return
     */
    public static String GetAddressByIp(String IP) {
        String resout = "";
        try {
            String str = getJsonContent("http://ip.taobao.com/service/getIpInfo.php?ip=" + IP);
            System.out.println(str);

            JSONObject obj = JSONObject.fromObject(str);
            JSONObject obj2 = (JSONObject)obj.get("data");
            Integer code = (Integer)obj.get("code");
            if (code.equals(0)) {
                resout = obj2.get("country") + "  " + obj2.get("area") + "  " +
                         obj2.get("region") + "  " + obj2.get("city") + "  " +
                         obj2.get("isp");
            } else {
                resout = "非法的 IP 地址";
            }
        } catch (Exception e) {
            e.printStackTrace();
            resout = "非法的 IP 地址";
        }
        return resout;

    }

    public static String getJsonContent(String urlStr) {
        try {// 获取HttpURLConnection连接对象
            URL url = new URL(urlStr);
            HttpURLConnection httpConn = (HttpURLConnection)url.openConnection();
            // 设置连接属性
            httpConn.setConnectTimeout(3000);
            httpConn.setDoInput(true);
            httpConn.setRequestMethod("GET");
            // 获取相应码
            int respCode = httpConn.getResponseCode();
            if (respCode == 200) {
                return ConvertStream2Json(httpConn.getInputStream());
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    private static String ConvertStream2Json(InputStream inputStream) {
        String jsonStr = "";
        // ByteArrayOutputStream相当于内存输出流
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int len = 0;
        // 将输入流转移到内存输出流中
        try {
            while ((len = inputStream.read(buffer, 0, buffer.length)) != -1) {
                out.write(buffer, 0, len);
            }
            // 将内存流转换为字符串
            jsonStr = new String(out.toByteArray());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return jsonStr;
    }

    /**
     * 获取本机外网IP
     * @param args
     */
    public static String getWebIp(String strUrl) {
        try {
            URL url = new URL(strUrl);
            BufferedReader br = new BufferedReader(new InputStreamReader(url.openStream()));
            String s = "";
            StringBuffer sb = new StringBuffer("");
            String webContent = "";
            while ((s = br.readLine()) != null) {
                sb.append(s + "\r\n");
            }
            br.close();
            webContent = sb.toString();
            int start = webContent.indexOf("[") + 1;
            int end = webContent.indexOf("]");
            webContent = webContent.substring(start, end);
            return webContent;
        } catch (Exception e) {
            e.printStackTrace();
            return "error open url:" + strUrl;
        }
    }

    public static void main(String[] args) {
        String arr1 = IpAddress.GetAddressByIp("120.192.182.1");
        System.out.println(arr1);
        System.out.println("外网IP： " + IpAddress.getWebIp("http://www.ip138.com/ip2city.asp"));
    }
}
